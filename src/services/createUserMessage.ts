import { Message } from '~/entities/messages'


export default function createUserMessage (content : string) : Message {
  return {
    role: 'user',
    content,
    time: Date.now()
  }
}