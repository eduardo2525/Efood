import { BounceLoader } from 'react-spinners'

import { Colors } from '../../EstiloGlobal'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <BounceLoader color={Colors.prymary} />
  </Container>
)

export default Loader
