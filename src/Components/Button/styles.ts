import styled from 'styled-components'
import { Colors } from '../../EstiloGlobal'
import { Link } from 'react-router-dom'

export const TagButton = styled.button`
  width: 82px;
  height: 24px;
  color: ${Colors.secundary};
  background-color: ${Colors.prymary};
  border: none;
  cursor: pointer;
  position: absolute;
  left: 8px;
  bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`

export const ButtonLink = styled(Link)`
  width: 96px;
  height: 24px;
  color: ${Colors.secundary};
  background-color: ${Colors.prymary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 8px;
  bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-decoration: none;

  &:hover {
    background-color: green;
    color: white;
  }
`
