import Product from '../Product'

import { Secao, Listing } from './styles'

type Props = {
  menu: RestaurantesType[]
}

export const Section = ({ menu }: Props) => (
  <Secao>
    <div className="container">
      <Listing>
        {menu.map((item) => (
          <Product
            key={item.id}
            description={item.descricao}
            image={item.capa}
            infos={item.tipo}
            note={item.avaliacao}
            title={item.titulo}
            to={`${item.id}`}
          />
        ))}
      </Listing>
    </div>
  </Secao>
)
