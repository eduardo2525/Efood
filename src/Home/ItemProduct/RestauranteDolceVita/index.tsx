import Button from '../../../Components/Button'
import {
  Img,
  ItemList,
  ListProducts,
  Paragraph,
  Title
} from '../../../pages/PageStructure/List/styles'
import CardapioDolceVita from './DolceProducts'

type Props = {
  cardapio: typeof CardapioDolceVita
}

const ItemDolce = ({ cardapio }: Props) => (
  <ListProducts>
    {cardapio.map((item) => (
      <>
        <ItemList key={item.id}>
          <Img src={item.image} />
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
          <Button type={'button'} title={'Adicionar'}>
            Adicionar ao carrinho
          </Button>
        </ItemList>
      </>
    ))}
  </ListProducts>
)

export default ItemDolce
