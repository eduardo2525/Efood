import {
  ListProducts as StyledListProducts,
  ItemList,
  Img,
  Title,
  Paragraph
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ListProducts = ({ image, title, description }: Props) => (
  <StyledListProducts>
    <ItemList>
      <Img src={image} alt={title} />
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </ItemList>
  </StyledListProducts>
)

export default ListProducts
