import styled from 'styled-components'
import { Colors } from '../../EstiloGlobal'

export const BackgroundFooter = styled.footer`
  width: 100%;
  height: 298px;
  margin-top: 120px;
  background-color: ${Colors.secundary};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SocialMedia = styled.div`
  width: 88px;
  height: 24px;
  margin-top: 32px;
  display: flex;
  justify-content: space-around;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Paragraph = styled.p`
  width: 480px;
  height: 24px;
  color: ${Colors.prymary};
  margin-top: 80px;

  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`
