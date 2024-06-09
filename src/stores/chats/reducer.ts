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
    case 'DELETE_CHAT': {
      if (!Array.isArray(state.chats[action.payload])) return state
      state.chats.splice(action.payload, 1)
      return { chats: [...state.chats] }
    }
    case 'LOAD_CHATS': {
      return { chats: [...action.payload] }
    }
    default: return state
  }
}