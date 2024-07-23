import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import HiokiSushi from './pages/Hioki'

const Rotas = () => (
  <Routes>
    <Route path="//Hioki_Sushi" element={<HiokiSushi />} />
    <Route path="/" element={<Home />} />
  </Routes>
)

export default Rotas
