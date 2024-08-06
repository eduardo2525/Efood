import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Item from './pages'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Home />
          <Footer />
        </>
      }
    />
    <Route path="/:id" element={<Item />} />
  </Routes>
)

export default Rotas
