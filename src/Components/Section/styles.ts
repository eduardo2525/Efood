import styled from 'styled-components'
import { breakpoints } from '../../EstiloGlobal'

export const Secao = styled.section`
  margin-top: 80px;

  .container__section {
    margin: 8px 8px 16px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`
export const Listing = styled.ul`
  width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
  row-gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`
