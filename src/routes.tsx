import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import HiokiSushi from './pages/Hioki'
import Header from './Components/Header'
import Footer from './Components/Footer'

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
    <Route path="/Hioki_Sushi" element={<HiokiSushi />} />
  </Routes>
)

export default Rotas
