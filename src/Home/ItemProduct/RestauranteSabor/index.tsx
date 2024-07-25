import Button from '../../../Components/Button'
import {
  ListProducts,
  ItemList,
  Img,
  Title,
  Paragraph
} from '../../../pages/PageStructure/List/styles'
import CardapioSaborOriente from './SaborOrienteProducts'

type Props = {
  cardapio: typeof CardapioSaborOriente
}

const ItemSaborOriente = ({ cardapio }: Props) => (
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

export default ItemSaborOriente
