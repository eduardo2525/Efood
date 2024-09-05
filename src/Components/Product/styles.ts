import styled from 'styled-components'
import { breakpoints, Colors } from '../../EstiloGlobal'

export const List = styled.li`
  width: 472px;
  height: 400px;
  border: 1px solid ${Colors.prymary};
  margin-bottom: 48px;
  border-radius: 8px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobale}) {
    height: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 100%;
  }
`
export const ImgMenu = styled.img`
  width: 471px;
  height: 217px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;
`

export const Title = styled.h3`
  color: ${Colors.prymary};
  font-size: 18px;
  font-weight: 700;
`
export const Assessment = styled.div`
  width: 56px;
  height: 24px;
  gap: 8px;
  display: flex;

  p {
    color: ${Colors.prymary};
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
  }

  img {
    width: 21px;
    height: 20px;
  }
`
export const Paragraph = styled.p`
  color: ${Colors.prymary};
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
