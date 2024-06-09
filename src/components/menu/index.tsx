import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import ROUTES from '~/constants/routes'
import getChatIndex from '~/services/getChatIndex'
import saveChat from '~/services/saveChat'
import Store from '~/services/store'
import { disChats, useChats } from '~/stores/chats'
import { deleteChat } from '~/stores/chats/actions'
import Button from '~/components/button'
import { ButtonsContainer, Chat, ChatsContainer, Container } from './style'

export default function Menu () {

  const navigate = useNavigate()
  const chats = useChats('chats')
  const deletedChatRef = useRef(false)

  function handleDeleteChat () {
    const chatIndex = getChatIndex()
    if (!Array.isArray(chats[chatIndex])) return
    const confirmed = confirm('Are you sure you want to delete?')
    if (!confirmed) return
    deletedChatRef.current = true
    disChats(deleteChat(chatIndex))
  }

  function handleSaveChat () {
    const chatIndex = getChatIndex()
    saveChat(chatIndex, chats[chatIndex])
  }

  useEffect(() => {
    if (!deletedChatRef.current) return
    deletedChatRef.current = false
    navigate(ROUTES.ROOT)
    Store.set('chats', chats)
  }, [chats])

  return (
    <Container>
      <ChatsContainer>
        { chats.map((messages, index) => {
          const { content } = messages[0]
          return (
            <Chat key={index} to={`${ROUTES.CHAT}/${++index}`}
              title={content}
            >
              { content }
            </Chat>
          )
        }) }
      </ChatsContainer>
      <ButtonsContainer>
        <Button
          style={{ padding: '6px', paddingBottom: '3px' }}
          onClick={() => navigate(ROUTES.CONFIG)}
        >
          <svg width="16px" height="16px" viewBox="0 0 32 32" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Configurations</title><path d="M23.265,24.381l.9-.894c4.164.136,4.228-.01,4.411-.438l1.144-2.785L29.805,20l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89,2.936-3.038,2.765-3.461L28.538,9.225c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166,20.166,0,0,0-.141-4.106l-.116-.263-2.974-1.3c-.438-.2-.592-.272-3.4,2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149,3.182c-.433.175-.586.237-.418,4.437l-.893.89c-4.162-.136-4.226.012-4.407.438L2.285,11.733,2.195,12l.094.232c.049.12.194.48,2.8,2.962l0,1.3c-3,2.89-2.935,3.038-2.763,3.462l1.138,2.817c.174.431.236.584,4.369.476l.9.935a20.243,20.243,0,0,0,.137,4.1l.116.265,2.993,1.308c.435.182.586.247,3.386-2.8l1.262.016c2.895,3.09,3.043,3.03,3.466,2.859l2.759-1.115C23.288,28.644,23.44,28.583,23.265,24.381ZM11.407,17.857a4.957,4.957,0,1,1,6.488,2.824A5.014,5.014,0,0,1,11.407,17.857Z"></path></g></svg>
        </Button>
        <Button
          style={{ padding: '6px', paddingBottom: '3px' }}
          onClick={handleDeleteChat}
        >
          <svg fill="#fff" width="16px" height="16px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Delete Chat</title><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
        </Button>
        <Button
          style={{ padding: '6px', paddingBottom: '3px' }}
          onClick={handleSaveChat}
        >
          <svg width="16px" height="16px" viewBox="0 0 32 32" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Save Chat</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-154.000000, -517.000000)" fill="#fff"> <path d="M172,522 C172,521.447 172.448,521 173,521 C173.552,521 174,521.447 174,522 L174,526 C174,526.553 173.552,527 173,527 C172.448,527 172,526.553 172,526 L172,522 L172,522 Z M163,529 L177,529 C177.552,529 178,528.553 178,528 L178,517 L162,517 L162,528 C162,528.553 162.448,529 163,529 L163,529 Z M182,517 L180,517 L180,529 C180,530.104 179.104,531 178,531 L162,531 C160.896,531 160,530.104 160,529 L160,517 L158,517 C155.791,517 154,518.791 154,521 L154,545 C154,547.209 155.791,549 158,549 L182,549 C184.209,549 186,547.209 186,545 L186,521 C186,518.791 184.209,517 182,517 L182,517 Z" id="save-floppy"> </path> </g> </g> </g></svg>
        </Button>
      </ButtonsContainer>
    </Container>
  )
}