import { Chats, Message } from '~/entities/messages'

export function addMessage (payload : { index : number, message : Message }) {
  return { type: 'ADD_MESSAGE', payload }
}

export function deleteChat (payload : number) {
  return { type: 'DELETE_CHAT', payload }
}

export function loadChats (payload : Chats) {
  return { type: 'LOAD_CHATS', payload }
}