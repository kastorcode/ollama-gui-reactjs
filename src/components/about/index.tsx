import { ColumnContainer, Filler } from '~/components/containers'

export default function About () {

  return (
    <ColumnContainer
      style={{ alignItems: 'flex-start', padding: '8px' }}
    >
      <p><a href='https://github.com/kastorcode/ollama-gui-reactjs' target='_blank'>This app</a> is a front end for the LLM (large language model) Ollama.</p>
      <p><a href='https://ollama.com' target='_blank'>Ollama</a> is an interface created by Meta that facilitates the use of artificial intelligence.</p>
      <p>The initial setup uses the <a href='https://ollama.com/library/llama3' target='_blank'>Llama 3</a> model.</p>
      <br />
      <Filler height='auto'>
        <a href='https://github.com/kastorcode' target='_blank' title='Powered by KastorCode'>&lt;kastor.code/&gt;</a>
      </Filler>
    </ColumnContainer>
  )

}