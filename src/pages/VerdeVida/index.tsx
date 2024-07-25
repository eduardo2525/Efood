import HeaderPage from '../PageStructure/Header'
import Background from '../../assets/image/background.png'
import BannerPage from '../PageStructure/Banner'
import BackgroundVerde from '../../assets/image/background-vegano.jpg'
import Section from '../PageStructure/SectionMenu'
import Footer from '../../Components/Footer'
import CardapioVerdeVida from '../../Home/ItemProduct/RestauranteVerdeVida/VerdeVidaProducts'
import ItemVerdeVida from '../../Home/ItemProduct/RestauranteVerdeVida'

const VerdeVida = () => (
  <>
    <HeaderPage background={Background} />
    <BannerPage
      background={BackgroundVerde}
      title={'Vegano'}
      description={'Verde Vida'}
    />
    <Section element={<ItemVerdeVida cardapio={CardapioVerdeVida} />} />
    <Footer />
  </>
)

export default VerdeVida
