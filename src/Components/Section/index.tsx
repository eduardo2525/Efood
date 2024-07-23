import Menu from '../../models/Menu'

import Product from '../Product'
import { Secao, Listing } from './styles'

type Props = {
  menu: Menu[]
}

export const Section = ({ menu }: Props) => (
  <Secao>
    <div className="container">
      <Listing>
        {menu.map((item) => (
          <Product
            key={item.id}
            description={item.description}
            image={item.image}
            infos={item.infos}
            note={item.note}
            assessment={item.assessment}
            title={item.title}
            to={item.to}
          />
        ))}
      </Listing>
    </div>
  </Secao>
)
