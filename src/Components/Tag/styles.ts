import styled from 'styled-components'

import { Props } from '.'
import { Colors } from '../../EstiloGlobal'

export const TagContainer = styled.div<Props>`
  height: 26px;
  color: ${Colors.secundary};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 4px;
  background-color: ${Colors.prymary};
`
