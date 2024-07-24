import { BackgroundBanner, BackgroundPages, SectionMenu } from './styles'

import { LogoFood } from '../../Components/Logo/index'
import BackgroundHioki from '../../assets/image/japones-comida-fundo-banner.jpg'
import Background from '../../assets/image/background.png'
import { ButtonLink } from '../../Components/Button/styles'
import Footer from '../../Components/Footer'
import ItemProduct from '../../Home/ItemProduct/RestauranteHiokiSushi'
import Cardapio from '../../Home/ItemProduct/RestauranteHiokiSushi/HiokiProducts'

const HiokiSushi = () => (
  <>
    <BackgroundPages style={{ backgroundImage: `url(${Background})` }}>
      <div className="container">
        <ButtonLink to={'/'} title="Restaurantes">
          Restaurantes
        </ButtonLink>
        <LogoFood />
        <p>0 produto(s) no carrinho</p>
      </div>
    </BackgroundPages>
    <BackgroundBanner style={{ backgroundImage: `url(${BackgroundHioki})` }}>
      <div className="container">
        <p>Japonesa</p>
        <h4>Hioki Sushi</h4>
      </div>
    </BackgroundBanner>
    <SectionMenu>
      <ItemProduct cardapio={Cardapio} />
    </SectionMenu>
    <Footer />
  </>
)

export default HiokiSushi
