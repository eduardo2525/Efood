import Menu from '../models/Menu'

import Page from '../assets/image/Page.png'
import HiokiRestaurante from '../assets/image/restaurante-japones.jpg'
import DolceVitaTrattoria from '../assets/image/restaurante_Dolce_vita.jpg'
import Pizzaria from '../assets/image/restaurante-pizzaria.jpg'
import Hamburgueria from '../assets/image/hamburgueria.jpg'
import SaboDoOriente from '../assets/image/restaurante-arabe.jpg'
import VerdeVida from '../assets/image/rstaurante-vegano.jpg'
import { Section } from '../Components/Section'

const cardapio: Menu[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: HiokiRestaurante,
    infos: ['Destaque da semana', 'Japonesa'],
    note: 4.9,
    assessment: Page,
    to: '/Hioki_Sushi'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: DolceVitaTrattoria,
    infos: ['Mais Vendido', 'Italiana'],
    note: 4.6,
    assessment: Page,
    to: '/Dolce_Vita'
  },
  {
    id: 3,
    title: 'La Bella Pizza',
    description:
      'A La Bella Pizza é preparada artesanalmente pelos nossos mestres pizzaiolos, seguindo receitas tradicionais passadas de geração em geração. Do clássico Margherita ao sofisticado Quattro Formaggi, cada fatia promete uma viagem culinária inesquecível.',
    image: Pizzaria,
    infos: ['Pizzaria'],
    note: 4.8,
    assessment: Page,
    to: ''
  },
  {
    id: 4,
    title: 'Big Bite Burgers',
    description:
      'Nossos hambúrgueres são preparados artesanalmente por nossos chefs especializados, utilizando carne bovina suculenta e temperada na medida certa, combinada com pães macios e tostados na perfeição.',
    image: Hamburgueria,
    infos: ['Melhores Preços', 'Brasileira'],
    note: 4.8,
    assessment: Page,
    to: ''
  },
  {
    id: 5,
    title: 'Sabor do Oriente',
    description:
      'Descubra as delícias do Oriente Médio no Sabor do Oriente, onde cada prato é uma viagem gastronômica aos sabores autênticos e aromáticos da culinária árabe. Localizado em um charmoso canto da cidade, nosso restaurante é um verdadeiro oásis de cultura e tradição.',
    image: SaboDoOriente,
    infos: ['Árabe'],
    note: 5,
    assessment: Page,
    to: ''
  },
  {
    id: 6,
    title: 'Verde Vida',
    description:
      'O paraíso dos sabores veganos! Nosso restaurante é um refúgio para aqueles que buscam uma alimentação saudável, ética e deliciosa. No Verde Vida, acreditamos que a comida vegana pode ser vibrante, saborosa e inovadora.',
    image: VerdeVida,
    infos: ['Vegano'],
    note: 4.5,
    assessment: Page,
    to: ''
  }
]

const Home = () => <Section menu={cardapio} />

export default Home
