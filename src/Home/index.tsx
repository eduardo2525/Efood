import Loader from '../Components/Loader'
import { Section } from '../Components/Section'

import { useGetRestaurantesQuery } from '../Services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <Loader />
  }

  return (
    <>
      <Section menu={restaurantes} />
    </>
  )
}

export default Home
