import { createGlobalStyle } from 'styled-components'

export const Colors = {
  prymary: '#E66767',
  secundary: '#FFEBD9',
  white: '#ffffff'
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

    .container {
      max-width: 1366px;
      width: 100%;
      margin: 0 auto;
    }
`
