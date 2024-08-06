import { styled } from 'styled-components'
import { Colors } from '../../../EstiloGlobal'

export const BackgroundBanner = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

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
    position: relative;
  }
`
