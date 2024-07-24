import ProductItem from '../../../models/ProductsItem'
import Sushi from '../../../assets/image/Sushi.jpg'
import Ramen from '../../../assets/image/Ramen.jpg'
import Temaki from '../../../assets/image/Temaki.jpg'

const Cardapio: ProductItem[] = [
  {
    id: 1,
    title: 'Sushi',
    description:
      'Pequenos pedaços de arroz temperado com vinagre, cobertos com fatias de peixe fresco ou vegetais. Servido com molho de soja e, às vezes, com uma pitada de wasabi e gengibre em conserva.',
    image: Sushi
  },
  {
    id: 2,
    title: 'Ramen',
    description:
      'Sopa de macarrão em um caldo saboroso, geralmente feito com carne de porco ou frango. O prato é completado com macarrão, carne fatiada, ovo cozido, vegetais.',
    image: Ramen
  },
  {
    id: 3,
    title: 'Temaki',
    description:
      'Desfrute do nosso delicioso temaki, um cone de alga nori crocante recheado com arroz de sushi temperado e ingredientes frescos. Escolha entre salmão, atum ou uma variedade de vegetais frescos, como pepino, cenoura e abacate.',
    image: Temaki
  }
]

export default Cardapio
