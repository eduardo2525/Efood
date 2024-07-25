import HeaderPage from '../PageStructure/Header'
import Background from '../../assets/image/background.png'
import BannerPage from '../PageStructure/Banner'
import BackgroundBig from '../../assets/image/hamburgueria-banner.jpg'
import Section from '../PageStructure/SectionMenu'
import Footer from '../../Components/Footer'
import ItemBigBurguers from '../../Home/ItemProduct/REstauranteBigBurguers'
import CardapioBigBurguers from '../../Home/ItemProduct/REstauranteBigBurguers/BigProducts'

const BigBurgers = () => (
  <>
    <HeaderPage background={Background} />
    <BannerPage
      background={BackgroundBig}
      title={'Hamburgueria'}
      description={'Big Burgers'}
    />
    <Section element={<ItemBigBurguers cardapio={CardapioBigBurguers} />} />
    <Footer />
  </>
)

export default BigBurgers
