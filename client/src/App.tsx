import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/globalStyle';
import THEME from './theme';

import { Home } from './pages/home';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
  );
}
