import { styled } from 'styled-components'
import { Logo } from '../../../Components/Logo/styles'
import { ButtonLink } from '../../../Components/Button/styles'
import { Colors } from '../../../EstiloGlobal'

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

  p {
    color: ${Colors.prymary};
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
  }
`
