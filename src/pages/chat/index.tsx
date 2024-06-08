import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Message, Messages, ModelResponse } from '~/entities/messages'
import createAssistantMessage from '~/services/createAssistantMessage'
import createUserMessage from '~/services/createUserMessage'
import requester from '~/services/requester'
import Store from '~/services/store'
import { disChats, useChats } from '~/stores/chats'
import { addMessage } from '~/stores/chats/actions'
import { useConfig } from '~/stores/config'
import Button from '~/components/button'
import { ColumnContainer, RowContainer } from '~/components/containers'
import Menu from '~/components/menu'
import TextArea from '~/components/textarea'
import { InputContainer, Loading, Talk } from './style'
import LOADING from '~/assets/images/loading.png'
import './index.css'


export default function Chat () {

  const location = useLocation()
  const [index, setIndex] = useState(-1)
  const [loading, setLoading] = useState(true)
  const chats = useChats('chats')
  const { autoSaveChats, modelName, modelUrl } = useConfig('config')
  const assistantMessage = useRef<Message>(createAssistantMessage(''))
  const renderCount = useRef(0)
  const talkRef = useRef<HTMLDivElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  function requestHandler () {
    if (loading) return
    const messageText = getMessageText()
    if (!messageText) return
    setLoading(true)
    const userMessage = createUserMessage(messageText)
    updateTalk(userMessage)
    disChats(addMessage({ index, message: userMessage }))
    assistantMessage.current = createAssistantMessage('')
    requester(
      modelUrl, modelName, chats[index], responseHandler, errorHandler
    )
  }

  function responseHandler (response : ModelResponse) {
    if (response.message.content) {
      updateTalk(response.message)
      assistantMessage.current.content += response.message.content
    }
    if (response.done) {
      appendBr(2)
      disChats(addMessage({ index, message: assistantMessage.current }))
      setLoading(false)
    }
  }

  function errorHandler (error : unknown) {
    alert('Something went wrong :-(')
    console.error(error)
    setLoading(false)
  }

  function getMessageText () {
    return textAreaRef.current?.value as string
  }

  function updateTalk (message : Message) {
    roles[message.role](message.content)
  }

  const roles : {
    [key in Message['role']] : (content : string) => void
  } = {
    assistant: content => {
      const span = document.createElement('span')
      span.innerText = content
      talkRef.current?.appendChild(span)
    },
    user: content => {
      clearTextArea()
      const p = document.createElement('p')
      p.classList.add('userMessage')
      p.innerText = content
      talkRef.current?.appendChild(p)
      appendBr()
    }
  }

  function clearTextArea () {
    (textAreaRef.current as HTMLTextAreaElement).value = ''
    textAreaRef.current?.focus()
  }

  function appendBr (amount = 1) {
    for (let i = 0; i < amount; i++) {
      talkRef.current?.appendChild(document.createElement('br'))
    }
  }

  useEffect(() => {
    renderCount.current++
    if (!autoSaveChats) return
    if (renderCount.current < 3) return
    Store.set('chats', chats)
  }, [autoSaveChats, chats])

  useEffect(() => {
    if (!loading) setLoading(true)
    if (chats[index]) {
      chats[index].forEach(message => {
        updateTalk(message)
      })
    }
    setLoading(false)
  }, [index])

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const indexParam = queryParams.get('index')
    const indexParsed = indexParam ? parseInt(indexParam) : null
    setIndex(indexParsed || 0)
  }, [])

  return (
    <RowContainer>
      <Menu />
      <ColumnContainer>
        <Talk ref={talkRef}>
          { loading && <Loading src={LOADING} /> }
        </Talk>
        <InputContainer>
          <TextArea
            ref={textAreaRef}
            placeholder='Message Ollama'
          />
          <Button
            onClick={requestHandler}
            style={{ paddingBottom: '0', paddingTop: '0' }}
          >
            <svg width="48" height="48" fill="none" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clip-rule="evenodd"></path></svg>
          </Button>
        </InputContainer>
      </ColumnContainer>
    </RowContainer>
  )
}