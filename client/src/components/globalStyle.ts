import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: ${({ theme }) => theme.FONT.REGULAR_400};
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;

    transition: 0.2s;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export { GlobalStyle };
