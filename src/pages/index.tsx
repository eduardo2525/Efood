import HeaderPage from './PageStructure/Header'
import Background from '../assets/image/background.png'
import BannerPage from './PageStructure/Banner'
import Section from './PageStructure/SectionMenu'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'
import { RestaurantesType } from '../Home'
import ItemCardapio from '../Home/ItemProduct/Restaurantes'
import { useParams } from 'react-router-dom'

const Item = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<RestaurantesType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

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
