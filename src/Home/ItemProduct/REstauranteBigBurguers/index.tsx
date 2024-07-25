import Button from '../../../Components/Button'
import {
  Img,
  ItemList,
  ListProducts,
  Paragraph,
  Title
} from '../../../pages/PageStructure/List/styles'
import CardapioBigBurguers from './BigProducts'

type Props = {
  cardapio: typeof CardapioBigBurguers
}

const ItemBigBurguers = ({ cardapio }: Props) => (
  <ListProducts>
    {cardapio.map((item) => (
      <ItemList key={item.id}>
        <Img src={item.image} title={item.title} />
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Button type={'button'} title={'Adicionar'}>
          Adicionar ao carrinho
        </Button>
      </ItemList>
    ))}
  </ListProducts>
)

export default ItemBigBurguers
