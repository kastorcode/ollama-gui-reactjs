import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ROUTES from '~/constants/routes'
import { Message, ModelResponse } from '~/entities/messages'
import createAssistantMessage from '~/services/createAssistantMessage'
import createUserMessage from '~/services/createUserMessage'
import getChatIndex from '~/services/getChatIndex'
import requester from '~/services/requester'
import scroller from '~/services/scroller'
import Store from '~/services/store'
import { disChats, useChats } from '~/stores/chats'
import { addMessage } from '~/stores/chats/actions'
import { useConfig } from '~/stores/config'
import About from '~/components/about'
import Button from '~/components/button'
import { ColumnContainer, RowContainer } from '~/components/containers'
import Menu from '~/components/menu'
import TextArea from '~/components/textarea'
import { InputContainer, Loading, Talk } from './style'
import LOADING from '~/assets/images/loading.png'
import './index.css'


export default function Chat () {

  const navigate = useNavigate()
  const { chat } = useParams()
  const [index, setIndex] = useState<number|null>(null)
  const [loading, setLoading] = useState(true)
  const chats = useChats('chats')
  const { autoSaveChats, modelName, modelUrl } = useConfig('config')
  const assistantMessage = useRef<Message>(createAssistantMessage(''))
  const renderCount = useRef(0)
  const rowContainerRef = useRef<HTMLDivElement>(null)
  const talkRef = useRef<HTMLDivElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  function requestHandler () {
    if (loading) return
    const messageText = getMessageText()
    if (!messageText) return
    setLoading(true)
    const userMessage = createUserMessage(messageText)
    updateTalk(false, userMessage)
    disChats(addMessage({ index: index as number, message: userMessage }))
    assistantMessage.current = createAssistantMessage('')
    requester(
      modelUrl, modelName, chats[index as number], responseHandler, errorHandler
    )
  }

  function responseHandler (response : ModelResponse) {
    if (response.message.content) {
      updateTalk(false, response.message)
      assistantMessage.current.content += response.message.content
    }
    if (response.done) {
      appendBr(2)
      disChats(addMessage({ index: index as number, message: assistantMessage.current }))
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

  function updateTalk (loaded : boolean, { role, content } : Message) {
    roles[role](content)
    if (loaded && role === 'assistant') {
      appendBr(2)
    }
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
    if (index === null) {
      return
    }
    if (index < 0 || index > chats.length) {
      navigate(ROUTES.ROOT)
      return
    }
    scroller(rowContainerRef, 1)
    if (chats[index]) {
      if (!loading) setLoading(true)
      chats[index].forEach(message => {
        updateTalk(true, message)
      })
    }
    setLoading(false)
  }, [index])

  useEffect(() => {
    textAreaRef.current?.focus()
    talkRef.current?.replaceChildren()
    setIndex(getChatIndex())
  }, [chat])

  return (
    <RowContainer ref={rowContainerRef}>
      <Menu loading={loading} scrollRef={rowContainerRef} />
      <ColumnContainer style={{ padding: 8, paddingRight: 0 }}>
        { loading && <Loading src={LOADING} /> }
        { chats.length ? <Talk ref={talkRef} /> : <About /> }
        <InputContainer>
          <TextArea
            placeholder='Message Ollama'
            ref={textAreaRef}
          />
          <Button onClick={requestHandler}>
            <svg width="24" height="24" viewBox="0 0 14 16"><path fill="#fff" d="m6.2 0.9q0.2-0.2 0.4-0.2 0.2-0.1 0.4-0.1 0.2 0 0.4 0.1 0.2 0 0.4 0.2l5.2 5.1c0.2 0.3 0.3 0.6 0.3 0.9 0 0.2-0.2 0.5-0.4 0.7-0.2 0.3-0.5 0.4-0.8 0.4-0.3 0-0.5-0.1-0.8-0.3l-3.2-3.2v9.8c0 0.3-0.1 0.6-0.3 0.8-0.2 0.2-0.5 0.3-0.8 0.3-0.3 0-0.6-0.1-0.8-0.3-0.2-0.2-0.3-0.5-0.3-0.8v-9.8l-3.2 3.2c-0.2 0.2-0.5 0.3-0.8 0.3-0.4 0-0.7-0.1-0.9-0.3-0.2-0.2-0.3-0.5-0.3-0.8 0-0.3 0.1-0.6 0.3-0.9z"/></svg>
          </Button>
        </InputContainer>
      </ColumnContainer>
    </RowContainer>
  )
}