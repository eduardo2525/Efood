import { BackgroundBanner } from './styles'

type Props = {
  background: string
  title: string
  description: string
}

const BannerPage = ({ background, title, description }: Props) => (
  <BackgroundBanner style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <p>{title}</p>
      <h4>{description}</h4>
    </div>
  </BackgroundBanner>
)

export default BannerPage
