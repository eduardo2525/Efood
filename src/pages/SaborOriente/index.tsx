import HeaderPage from '../PageStructure/Header'
import Background from '../../assets/image/background.png'
import BannerPage from '../PageStructure/Banner'
import BackgroundSabor from '../../assets/image/background-arabe.jpg'
import Section from '../PageStructure/SectionMenu'
import Footer from '../../Components/Footer'
import ItemSaborOriente from '../../Home/ItemProduct/RestauranteSabor'
import CardapioSaborOriente from '../../Home/ItemProduct/RestauranteSabor/SaborOrienteProducts'

const SaborOriente = () => (
  <>
    <HeaderPage background={Background} />
    <BannerPage
      background={BackgroundSabor}
      title={'Árabe'}
      description={'Sabor do Oriente'}
    />
    <Section element={<ItemSaborOriente cardapio={CardapioSaborOriente} />} />
    <Footer />
  </>
)

export default SaborOriente
