import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import HiokiSushi from './pages/Hioki'
import DolceVita from './pages/Dolce'
import Header from './Components/Header'
import Footer from './Components/Footer'
import BellaPizza from './pages/Bella'
import BigBurgers from './pages/BigBurgers/indes'
import SaborOriente from './pages/SaborOriente'
import VerdeVida from './pages/VerdeVida'

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
    <Route path="/Dolce_Vita" element={<DolceVita />} />
    <Route path="/Bella_Pizza" element={<BellaPizza />} />
    <Route path="/Big_Burgers" element={<BigBurgers />} />
    <Route path="/Sabor_do_oriente" element={<SaborOriente />} />
    <Route path="/Verde_Vida" element={<VerdeVida />} />
  </Routes>
)

export default Rotas
