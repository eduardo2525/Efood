import HeaderPage from './PageStructure/Header'
import Background from '../assets/image/background.png'
import BannerPage from './PageStructure/Banner'
import Section from './PageStructure/SectionMenu'
import Footer from '../Components/Footer'
import ItemCardapio from '../Home/Restaurantes'
import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../Services/api'

const Item = () => {
  const { id } = useParams()
  const { data: menu } = useGetCardapioQuery(id!)

  if (!menu) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <HeaderPage background={Background} />
      <BannerPage
        key={menu.id}
        background={menu.capa}
        title={menu.tipo}
        description={menu.titulo}
      />
      <Section element={<ItemCardapio />} />
      <Footer />
    </>
  )
}

export default Item
