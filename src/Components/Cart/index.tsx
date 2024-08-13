import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

import { Overlay, CartContainer, Sidebar, List, Img } from './styles'
import Bin from '../../assets/image/lixeira-de-reciclagem 1.jpg'
import { TagButton } from '../Button/styles'
import { close, remove } from '../../Store/Reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <List key={item.id}>
              <Img src={item.foto} alt={item.nome} />
              <div className="description">
                <p>{item.nome}</p>
                <span>{item.preco.toFixed(2)}</span>
                <img
                  onClick={() => removeItem(item.id)}
                  className="bin"
                  src={Bin}
                  alt=""
                />
              </div>
            </List>
          ))}
        </ul>
        <p className="prices">
          Valor Total <span>{getTotalPrice().toFixed(2)}</span>
        </p>
        <TagButton type={'button'} title={'entrga'}>
          Continuar com a entrega
        </TagButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
