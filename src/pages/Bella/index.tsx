import HeaderPage from '../PageStructure/Header'
import Background from '../../assets/image/background.png'
import BannerPage from '../PageStructure/Banner'
import BackgroundBella from '../../assets/image/pizzaria-banner.jpg'
import Section from '../PageStructure/SectionMenu'
import ItemBella from '../../Home/ItemProduct/RestauranteBellaPizza'
import Footer from '../../Components/Footer'
import CardapioBella from '../../Home/ItemProduct/RestauranteBellaPizza/BellaProducts'

const BellaPizza = () => (
  <>
    <HeaderPage background={Background} />
    <BannerPage
      background={BackgroundBella}
      title={'Pizzaria'}
      description={'La Bella Pizza'}
    />
    <Section element={<ItemBella cardapio={CardapioBella} />} />
    <Footer />
  </>
)

export default BellaPizza
