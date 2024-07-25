import ProductItem from '../../../models/ProductsItem'
import Cheeseburger from '../../../assets/image/Cheeseburger.jpg'
import BaconBurger from '../../../assets/image/Bacon-Burger.jpg'
import VeggieBurger from '../../../assets/image/Veggie-Burger.jpg'

const CardapioBigBurguers: ProductItem[] = [
  {
    id: 1,
    title: 'Cheeseburger',
    description:
      'Um hambúrguer clássico que inclui uma ou mais fatias de queijo derretido sobre o hambúrguer de carne',
    image: Cheeseburger
  },
  {
    id: 2,
    title: 'Bacon Burger',
    description:
      'Este hambúrguer adiciona fatias crocantes de bacon ao tradicional hambúrguer de carne. ',
    image: BaconBurger
  },
  {
    id: 3,
    title: 'Veggie Burger',
    description:
      'Uma opção vegetariana que utiliza um hambúrguer feito de vegetais, grãos, ou leguminosas em vez de carne.',
    image: VeggieBurger
  }
]

export default CardapioBigBurguers
