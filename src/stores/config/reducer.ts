import StoreAction from '~/entities/storeAction'
import { STATE } from './index'

export default function reducer (
  state : typeof STATE, action : StoreAction
) {
  switch (action.type) {
    case 'TOGGLE_AUTO_SAVE_CHATS': {
      return {
        config: {
          ...state.config,
          autoSaveChats: !state.config.autoSaveChats
        }
      }
    }
    case 'UPDATE_CONFIG': {
      return {
        config: { ...action.payload }
      }
    }
    default: return state
  }
}