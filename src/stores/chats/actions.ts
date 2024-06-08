import { Message } from '~/entities/messages'

export function addMessage (payload : { index : number, message : Message }) {
  return { type: 'ADD_MESSAGE', payload }
}