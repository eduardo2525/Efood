import styled from 'styled-components'
import { Colors } from '../../../EstiloGlobal'

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;

  &.visivel {
    display: flex;
  }
`
export const Lists = styled.ul`
  max-width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${Colors.prymary};
  position: relative;
`

export const Item = styled.li`
  display: flex;
  color: ${Colors.white};

  div {
    display: flex;
    flex-direction: column;
    position: relative;

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
      line-height: 22px;
    }

    p {
      font-weight: 400;
    }

    span {
      margin-top: 16px;
    }

    button {
      width: 218px;
      height: 24px;
      color: ${Colors.prymary};
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      position: absolute;
      bottom: 59px;
      cursor: pointer;
    }
  }
`

export const ImgModal = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;
`
export const CloseImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
`
