import StoreAction from '~/entities/storeAction'
import { STATE } from './index'

export default function reducer (
  state : typeof STATE, action : StoreAction
) {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const { index, message } = action.payload
      if (Array.isArray(state.chats[index]))
        state.chats[index].push(message)
      else
        state.chats[index] = [message]
      return { chats: [...state.chats] }
    }
    default: return state
  }
}