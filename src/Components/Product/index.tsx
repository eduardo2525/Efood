import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import Page from '../../assets/image/Page.png'
import { List, ImgMenu, Infos, Title, Assessment, Paragraph } from './styles'

type Props = {
  description: string
  image: string
  infos: string
  note: number
  title: string
  to: string
}

const Product: React.FC<Props> = ({
  description,
  infos,
  note,
  image,
  title,
  to
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 255) {
      return descricao.slice(0, 252) + '...'
    }
    return descricao
  }

  return (
    <List>
      <ImgMenu src={image} alt={title} />
      <Infos>
        <Tag>{infos}</Tag>
      </Infos>
      <div className="container__section">
        <Title>{title}</Title>
        <Assessment>
          <p>{note}</p>
          <img src={Page} alt="estrela de avaliação" />
        </Assessment>
      </div>
      <Paragraph>{getDescricao(description)}</Paragraph>
      <ButtonLink type="link" to={to} title="click aqui">
        Saiba mais
      </ButtonLink>
    </List>
  )
}

export default Product
