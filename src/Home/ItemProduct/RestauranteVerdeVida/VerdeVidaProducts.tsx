import ProductItem from '../../../models/ProductsItem'
import Curry from '../../../assets/image/curry-de-grao-de-bico.jpg'
import TofuMexido from '../../../assets/image/CoraFoodConcept.jpg'
import LasanhaVegetais from '../../../assets/image/lasanha-vegetais.jpg'

const CardapioVerdeVida: ProductItem[] = [
  {
    id: 1,
    title: 'Curry de Grão-de-Bico',
    description:
      'Com grão-de-bico cozido em um molho à base de leite de coco, tomate, cebola, alho, gengibre e uma mistura de especiarias como cúrcuma, cominho e coentro.',
    image: Curry
  },
  {
    id: 2,
    title: 'Tofu Mexido',
    description:
      'Uma alternativa vegana ao ovo mexido, feita com tofu esfarelado cozido com vegetais como cebola, pimentão e espinafre, temperado com cúrcuma.',
    image: TofuMexido
  },
  {
    id: 3,
    title: 'Lasanha de Vegetais',
    description:
      'feita com camadas de massa de lasanha, legumes variados (como abobrinha, berinjela, espinafre e cogumelos)',
    image: LasanhaVegetais
  }
]

export default CardapioVerdeVida
