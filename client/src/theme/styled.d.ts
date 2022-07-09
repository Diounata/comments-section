import 'styled-components';

import THEME from '.';

type ThemeType = typeof THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
