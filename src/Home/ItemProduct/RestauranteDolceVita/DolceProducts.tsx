import ProductItem from '../../../models/ProductsItem'
import PizzaMargherita from '../../../assets/image/pizza-margherital.jpg'
import Risotto from '../../../assets/image/Risotto_alla_Milanese.jpg'
import Spaghetti from '../../../assets/image/Spaghetti_alla_Carbonara.jpg'

const CardapioDolceVita: ProductItem[] = [
  {
    id: 1,
    title: 'Pizza Margherita',
    description:
      'Uma pizza clássica italiana feita com massa fina, molho de tomate fresco, mussarela de búfala, folhas de manjericão fresco e um fio de azeite de oliva extra virgem.',
    image: PizzaMargherita
  },
  {
    id: 2,
    title: 'Risotto alla Milanese',
    description:
      'Preparado com caldo de carne, manteiga, cebola, vinho branco e queijo parmesão. O ingrediente especial é o açafrão, que dá ao risoto sua cor amarela vibrante e um sabor único e aromático.',
    image: Risotto
  },
  {
    id: 3,
    title: 'Spaghetti alla Carbonara',
    description:
      'É conhecido pelo seu molho cremoso e sabor rico, resultante da combinação dos ovos e queijo, com um toque de carne curada.',
    image: Spaghetti
  }
]

export default CardapioDolceVita
