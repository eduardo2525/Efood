import { styled } from 'styled-components'
import { Logo } from '../../../Components/Logo/styles'
import { ButtonLink } from '../../../Components/Button/styles'
import { breakpoints, Colors } from '../../../EstiloGlobal'

export const BackgroundPages = styled.header`
  width: 100%;
  height: 192px;

  .container {
    width: 1024px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${Logo} {
    margin-top: 0px;

    @media (max-width: ${breakpoints.mobale}) {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${ButtonLink} {
    position: relative;
    top: 10px;
    color: ${Colors.prymary};
    background: none;
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
  }
`
export const CartButton = styled.p`
  position: relative;
  top: 10px;
  color: ${Colors.prymary};
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
