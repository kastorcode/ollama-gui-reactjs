import { createStore } from 'react-hooks-global-state'

import { Chats } from '~/entities/messages'
import reducer from './reducer'

interface ChatsState {
  chats : Chats
}

export const STATE : ChatsState = {
  chats: []
}

export const {
  dispatch: disChats,
  useStoreState: useChats
} = createStore(reducer, STATE)