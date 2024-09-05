import styled from 'styled-components'
import { breakpoints, Colors } from '../../EstiloGlobal'
import { TagButton } from '../Button/styles'

type GroupProps = {
  $maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${Colors.prymary};
  z-index: 1;
  padding: 16px 8px;

  .prices {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.secundary};
  }

  ${TagButton} {
    position: static;
    margin-top: 16px;
    width: 100%;
    height: 24px;
    color: ${Colors.prymary};
    background-color: ${Colors.secundary};
  }

  @media (max-width: ${breakpoints.mobale}) {
    width: 90%;
  }
`

export const List = styled.li`
  width: 344px;
  height: 100%;
  background-color: ${Colors.secundary};
  position: relative;
  margin-top: 16px;
  display: flex;

  p {
    margin-top: 8px;
    margin-bottom: 16px;
    color: ${Colors.prymary};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${Colors.prymary};
  }

  .bin {
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobale}) {
    width: 100%;
  }
`

export const Img = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
`
export const Checkout = styled.div`
  position: fixed;
  top: 0;
  color: ${Colors.secundary};
`

export const Form = styled.form`
  width: 345px;
  margin-top: 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 34px;
  }

  h3,
  span {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 18px;
  }

  input {
    margin: 8px 0;
    width: 344px;
    height: 32px;

    &.error {
      color: red;
    }

    @media (max-width: ${breakpoints.mobale}) {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.mobale}) {
    width: 95%;
  }
`

export const InputGroup = styled.div<GroupProps>`
  gap: 30px;
  max-width: ${(props) => props.$maxWidth || 'auto'};

  > input {
    width: 100%;
  }
`

export const FinishTitle = styled.h3`
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Paragraph = styled.p`
  max-width: 344px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  span {
    display: block;
    margin: 12px;
  }

  @media (max-width: ${breakpoints.mobale}) {
    width: 95%;
  }
`
