import styled from 'styled-components'

export const Secao = styled.section`
  margin-top: 80px;

  .container__section {
    margin: 8px 8px 16px;
    display: flex;
    justify-content: space-between;
  }
`
export const Listing = styled.ul`
  width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
`
