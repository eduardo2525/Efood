import { BackgroundFooter, SocialMedia, Paragraph } from './styles'

import { LogoFood } from '../Logo'
import Instagrm from '../../assets/image/Group.svg'
import Facebook from '../../assets/image/Vector (2).svg'
import Twitter from '../../assets/image/Vector.svg'

const Footer = () => (
  <BackgroundFooter>
    <div className="container">
      <LogoFood />
      <SocialMedia>
        <img src={Instagrm} alt="logo do instagram" />
        <img src={Facebook} alt="logo do facebook" />
        <img src={Twitter} alt="logo do twitter" />
      </SocialMedia>
      <Paragraph>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Paragraph>
    </div>
  </BackgroundFooter>
)

export default Footer
