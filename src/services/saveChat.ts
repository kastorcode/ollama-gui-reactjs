import { Messages } from '~/entities/messages'
import Store from '~/services/store'

export default function saveChat (index : number, messages : Messages) {
  const chats = Store.get('chats') || []
  if (Array.isArray(chats[index]))
    chats[index].push(...messages)
  else
    chats[index] = messages
  Store.set('chats', chats)
}