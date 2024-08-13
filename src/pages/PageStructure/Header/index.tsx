import { ButtonLink } from '../../../Components/Button/styles'
import { LogoFood } from '../../../Components/Logo'
import Cart from '../../../Components/Cart'
import { open } from '../../../Store/Reducers/cart'

import { BackgroundPages, CartButton } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../Store'

type Props = {
  background: string
}

const HeaderPage = ({ background }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <BackgroundPages style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <ButtonLink to={'/'} title="Restaurantes">
          Restaurantes
        </ButtonLink>
        <LogoFood />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
      <Cart />
    </BackgroundPages>
  )
}

export default HeaderPage
