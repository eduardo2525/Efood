import ProductItem from '../../../models/ProductsItem'
import Hummus from '../../../assets/image/Hummus.jpg'
import Falafel from '../../../assets/image/Falafel.jpg'
import Tabule from '../../../assets/image/Tabule.jpg'

const CardapioSaborOriente: ProductItem[] = [
  {
    id: 1,
    title: 'Hummus',
    description:
      'Um purê cremoso feito de grão-de-bico, tahine (pasta de gergelim), suco de limão e alho.',
    image: Hummus
  },
  {
    id: 2,
    title: 'Falafel',
    description:
      'Bolinhos fritos feitos de grão-de-bico moído, ervas, especiarias e cebola. Geralmente são servidos em pães pita com salada, tahine ou molho de iogurte.',
    image: Falafel
  },
  {
    id: 3,
    title: 'Tabule',
    description:
      'Uma salada fresca e leve feita de trigo bulgur, salsinha picada, hortelã, tomate, cebola, e temperada com suco de limão, azeite de oliva, sal e pimenta.',
    image: Tabule
  }
]

export default CardapioSaborOriente
