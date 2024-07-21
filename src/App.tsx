import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { EstiloGlobal } from './EstiloGlobal'
import Header from './Components/Header'
import { Section } from './Components/Section'
import cardapio from './Home'
import Footer from './Components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Section menu={cardapio} />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
