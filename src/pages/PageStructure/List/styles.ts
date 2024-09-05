import { styled } from 'styled-components'
import { breakpoints, Colors } from '../../../EstiloGlobal'
import { TagButton } from '../../../Components/Button/styles'

export const ListProducts = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: ${breakpoints.mobale}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${breakpoints.mobale}) and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`
export const ItemList = styled.li`
  width: 320px;
  height: 344px;
  border-radius: 8px;
  background-color: ${Colors.prymary};
  position: relative;

  ${TagButton} {
    width: 304px;
    height: 24px;
    color: ${Colors.prymary};
    background-color: ${Colors.secundary};
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }
`
export const Img = styled.img`
  width: 304px;
  height: 167px;
  margin: 8px;
`
export const Title = styled.p`
  margin-left: 8px;
  color: ${Colors.secundary};
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
`
export const Paragraph = styled.p`
  width: 304px;
  height: 88px;
  margin: 8px;
  color: ${Colors.secundary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`
