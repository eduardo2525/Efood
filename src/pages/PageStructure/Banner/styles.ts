import { styled } from 'styled-components'
import { Colors } from '../../../EstiloGlobal'

export const BackgroundBanner = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    width: 1024px;
    height: 280px;
  }

  p {
    position: relative;
    top: 24px;
    color: ${Colors.white};
    font-size: 32px;
    font-weight: 100;
    line-height: 40px;
  }

  h4 {
    margin-top: 160px;
    color: ${Colors.white};
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
  }
`
