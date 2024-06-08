import { Messages, ModelResponse } from '~/entities/messages'


export default async function requester (
  modelUrl : string,
  modelName : string,
  messages : Messages,
  onData : (response : ModelResponse) => void,
  onError : (error : unknown) => void
) {
  try {
    const response = await fetch(modelUrl, {
      method: 'POST',
      body: JSON.stringify({
        model: modelName,
        messages
      })
    })
    const decoder = new TextDecoder()
    response.body?.pipeTo(new WritableStream({
      write: chunk => {
        try {
          onData(JSON.parse(decoder.decode(chunk)))
        }
        catch (error) {
          onError(error)
        }
      }
    }))
  }
  catch (error) {
    onError(error)
  }
}