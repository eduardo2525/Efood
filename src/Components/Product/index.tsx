import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import { List, ImgMenu, Infos, Title, Assessment, Paragraph } from './styles'

type Props = {
  description: string
  image: string
  infos: string[]
  note: number
  assessment: string
  title: string
  to: string
}

const Product: React.FC<Props> = ({
  description,
  infos,
  note,
  image,
  assessment,
  title,
  to
}: Props) => (
  <List>
    <ImgMenu src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container__section">
      <Title>{title}</Title>
      <Assessment>
        <p>{note}</p>
        <img src={assessment} alt="estrela de avaliação" />
      </Assessment>
    </div>
    <Paragraph>{description}</Paragraph>
    <ButtonLink type="link" to={to} title="click aqui">
      Saiba mais
    </ButtonLink>
  </List>
)

export default Product
