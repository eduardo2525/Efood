import styled from 'styled-components'
import { breakpoints, Colors } from '../../EstiloGlobal'

export const BackgroundBanner = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobale}) {
    height: 90%;
  }
`
export const Titulo = styled.h1`
  width: 539px;
  height: 84px;
  color: ${Colors.prymary};
  margin-top: 138px;

  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    font-size: 32px;
    margin: 30px;
  }

  @media (max-width: ${breakpoints.mobale}) {
    height: auto;
    font-size: 24px;
  }
`
