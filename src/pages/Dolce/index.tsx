import HeaderPage from '../PageStructure/Header'
import Background from '../../assets/image/background.png'
import BannerPage from '../PageStructure/Banner'
import BackgroundDolce from '../../assets/image/Dolce_vita.png'
import Footer from '../../Components/Footer'
import Section from '../PageStructure/SectionMenu'
import ItemDolce from '../../Home/ItemProduct/RestauranteDolceVita'
import CardapioDolceVita from '../../Home/ItemProduct/RestauranteDolceVita/DolceProducts'

const DolceVita = () => (
  <>
    <HeaderPage background={Background} />
    <BannerPage
      background={BackgroundDolce}
      title={'Italiana'}
      description={'La Dolce Vita Trattoria'}
    />
    <Section element={<ItemDolce cardapio={CardapioDolceVita} />} />
    <Footer />
  </>
)

export default DolceVita
