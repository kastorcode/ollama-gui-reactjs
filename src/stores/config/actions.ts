import { STATE } from './index'

export function toggleAutoSaveChats () {
  return { type: 'TOGGLE_AUTO_SAVE_CHATS' }
}

export function updateConfig (payload : typeof STATE['config']) {
  return { type: 'UPDATE_CONFIG', payload }
}