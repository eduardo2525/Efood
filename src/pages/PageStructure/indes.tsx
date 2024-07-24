import { ButtonLink } from '../../Components/Button/styles'
import { LogoFood } from '../../Components/Logo'
import { BackgroundPages } from './styles'

type Props = {
  background: string
}

const HeaderPage = ({ background }: Props) => (
  <BackgroundPages style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <ButtonLink to={'/'} title="Restaurantes">
        Restaurantes
      </ButtonLink>
      <LogoFood />
      <p>0 produto(s) no carrinho</p>
    </div>
  </BackgroundPages>
)

export default HeaderPage
