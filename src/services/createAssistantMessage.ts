import { Message } from '~/entities/messages'


export default function createAssistantMessage (content : string) : Message {
  return {
    role: 'assistant',
    content,
    time: Date.now()
  }
}