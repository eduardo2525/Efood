import { LogoFood } from '../Logo/index'
import Background from '../../assets/image/background.png'

import { BackgroundBanner, Titulo } from './styles'

const Header = () => (
  <BackgroundBanner style={{ backgroundImage: `url(${Background})` }}>
    <div className="container">
      <LogoFood />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </BackgroundBanner>
)

export default Header
