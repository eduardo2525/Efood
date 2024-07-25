import BackgroundHioki from '../../assets/image/japones-comida-fundo-banner.jpg'
import Background from '../../assets/image/background.png'
import Footer from '../../Components/Footer'
import ItemProduct from '../../Home/ItemProduct/RestauranteHiokiSushi'
import HeaderPage from '../PageStructure/Header'
import BannerPage from '../PageStructure/Banner'
import Section from '../PageStructure/SectionMenu'
import CardapioHioki from '../../Home/ItemProduct/RestauranteHiokiSushi/HiokiProducts'

const HiokiSushi = () => (
  <>
    <HeaderPage background={Background} />
    <BannerPage
      background={BackgroundHioki}
      title={'Japonesa'}
      description={'Hioki Sushi'}
    />
    <Section element={<ItemProduct cardapio={CardapioHioki} />} />
    <Footer />
  </>
)

export default HiokiSushi
