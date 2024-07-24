import Button from '../../../Components/Button'
import { ListProducts, ItemList, Img, Title, Paragraph } from './styles'
import Cardapio from './HiokiProducts'

type Props = {
  cardapio: typeof Cardapio
}

const ItemProduct = ({ cardapio }: Props) => (
  <ListProducts>
    {cardapio.map((item) => (
      <ItemList key={item.id}>
        <Img src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Button type={'button'} title={'Adicionar'}>
          Adicionar ao carrinho
        </Button>
      </ItemList>
    ))}
  </ListProducts>
)

export default ItemProduct
