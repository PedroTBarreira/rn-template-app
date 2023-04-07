// styled.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'dark' | 'light';
    background: string;
    primary: string;
    background: string;
    icons: {
      fill: string;
      dark: {fill: string};
      light: {fill: string};
    };
    button: {
      background: string;
      secondary: string;
    };
    text: {
      dark: {
        title: string;
        subtitle: string;
        paragraph: string;
      };
      light: {
        title: string;
        subtitle: string;
        paragraph: string;
      };
      title: string;
      subtitle: string;
      paragraph: string;
    };
  }
}
