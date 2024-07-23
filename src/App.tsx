import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './EstiloGlobal'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
