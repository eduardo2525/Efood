import styled from 'styled-components'
import { breakpoints } from '../../../EstiloGlobal'

export const SectionMenu = styled.section`
  width: 1024px;
  height: 100%;
  margin: 56px auto 120px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
