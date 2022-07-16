import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: ${({ theme }) => theme.FONT.REGULAR_400};
  }

  body {
    display: grid;
    place-items: center;

    background-color: ${({ theme }) => theme.COLOR.VERY_LIGHT_GRAY};
  }

  button {
    border: none;
    background-color: inherit;
    -webkit-tap-highlight-color: transparent;
    font-size: inherit;
    cursor: pointer;

    transition: 0.2s;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover, &:focus {
      opacity: 0.7;
    }
  }
`;

export { GlobalStyle };
