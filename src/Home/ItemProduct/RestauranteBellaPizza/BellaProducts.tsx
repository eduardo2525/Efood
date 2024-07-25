import ProductItem from '../../../models/ProductsItem'
import Margherita from '../../../assets/image/pizza-margherital.jpg'
import Pepperoni from '../../../assets/image/pizza-Pepperoni.jpg'
import QuatroQueijos from '../../../assets/image/Pizza-4-queijos.jpg'

const CardapioBella: ProductItem[] = [
  {
    id: 1,
    title: 'Margherita',
    description:
      'Uma pizza clássica italiana, simples e deliciosa, feita com molho de tomate, mussarela fresca, folhas de manjericão e um fio de azeite de oliva.',
    image: Margherita
  },
  {
    id: 2,
    title: 'Pepperoni',
    description:
      'Popular nos Estados Unidos, essa pizza é coberta com molho de tomate, queijo mussarela e fatias de pepperoni, um tipo de salame picante.',
    image: Pepperoni
  },
  {
    id: 3,
    title: 'Quatro Queijos',
    description:
      'Uma delícia para os amantes de queijo, essa pizza combina quatro tipos diferentes de queijo, geralmente mussarela, gorgonzola, parmesão e provolone.',
    image: QuatroQueijos
  }
]

export default CardapioBella
