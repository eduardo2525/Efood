import Button from '../../../Components/Button'
import {
  ListProducts,
  Img,
  ItemList,
  Title,
  Paragraph
} from '../../../pages/PageStructure/List/styles'
import CardapioBella from './BellaProducts'

type Props = {
  cardapio: typeof CardapioBella
}

const ItemBella = ({ cardapio }: Props) => (
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

export default ItemBella
