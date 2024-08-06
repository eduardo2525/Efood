import { useEffect, useState } from 'react'
import { Section } from '../Components/Section'

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
  const [restaurantes, setRestaurantes] = useState<RestaurantesType[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

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
