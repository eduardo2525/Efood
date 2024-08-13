import { Section } from '../Components/Section'

import { useGetRestaurantesQuery } from '../Services/api'

export type RestaurantesType = {
  nome: string | undefined
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <div>Carregando....</div>
  }

  return (
    <>
      <Section menu={restaurantes} />
    </>
  )
}

export default Home
