import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './EstiloGlobal'
import Rotas from './routes'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
