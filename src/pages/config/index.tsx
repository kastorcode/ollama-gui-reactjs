import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ROUTES from '~/constants/routes'
import scroller from '~/services/scroller'
import Store from '~/services/store'
import { disConfig, useConfig } from '~/stores/config'
import { toggleAutoSaveChats, updateConfig } from '~/stores/config/actions'
import Button from '~/components/button'
import { ColumnContainer, Filler, RowContainer } from '~/components/containers'
import Footer from '~/components/footer'
import Menu from '~/components/menu'
import TextInput from '~/components/textInput'
import Toggle from '~/components/toggle'
import { ButtonsContainer } from './style'


export default function Config () {

  const fillerRef = useRef({ height: '24px' })
  const renderCount = useRef(0)
  const rowContainerRef = useRef<HTMLDivElement>(null)
  const config = useConfig('config')
  const [modelName, setModelName] = useState(config.modelName)
  const [modelUrl, setModelUrl] = useState(config.modelUrl)
  const navigate = useNavigate()

  function handleClearAll () {
    const confirmed = confirm('Are you sure you want to delete everything?\nThis cannot be undone.')
    if (!confirmed) return
    Store.clear()
    navigate(ROUTES.ROOT)
    window.location.reload()
  }

  function handleSave () {
    disConfig(updateConfig({
      ...config, modelName, modelUrl
    }))
  }

  useEffect(() => {
    scroller(rowContainerRef, 1)
  }, [])

  useEffect(() => {
    renderCount.current++
    if (renderCount.current < 3) return
    Store.set('config', config)
  }, [config])

  return (
    <RowContainer ref={rowContainerRef}>
      <Menu scrollRef={rowContainerRef} />
      <ColumnContainer>
        <Filler />
        <Filler height='auto' width='88%'>
          <Toggle
            checked={config.autoSaveChats} id='autoSaveChats'
            label='Save all chats' onChange={() => disConfig(toggleAutoSaveChats())}
          />
          <Filler height={fillerRef.current.height} />
          <TextInput
            placeholder='Model URL' value={modelUrl}
            onChange={e => setModelUrl(e.target.value)}
          />
          <Filler height={fillerRef.current.height} />
          <TextInput
            placeholder='Model Name' value={modelName}
            onChange={e => setModelName(e.target.value)}
          />
          <Filler height={fillerRef.current.height} />
          <ButtonsContainer>
            <Button onClick={handleClearAll}>Clear all</Button>
            <Button onClick={() => navigate(ROUTES.GO_BACK)}>Chat</Button>
            <Button onClick={handleSave}>Save</Button>
          </ButtonsContainer>
        </Filler>
        <Filler />
        <Footer />
      </ColumnContainer>
    </RowContainer>
  )

}