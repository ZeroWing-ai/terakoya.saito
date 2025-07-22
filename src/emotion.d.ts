import '@emotion/react';
import type { Theme as ThemeType } from './theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: import('@emotion/react').CSSObject | import('@emotion/react').CSSObject[];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: import('@emotion/react').CSSObject | import('@emotion/react').CSSObject[];
    }
  }
}
