import styled from 'styled-components'
import { Logo } from '../../Components/Logo/styles'
import { ButtonLink } from '../../Components/Button/styles'
import { Colors } from '../../EstiloGlobal'

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

export const SectionMenu = styled.section`
  width: 1024px;
  height: 100%;
  margin: 56px auto 120px;
`
