import { createStore } from 'react-hooks-global-state'

import reducer from './reducer'

export const STATE = {
  config: {
    autoSaveChats: false,
    modelName: 'llama3',
    modelUrl: 'http://localhost:11434/api/chat'
  }
}

export const {
  dispatch: disConfig,
  useStoreState: useConfig
} = createStore(reducer, STATE)