import {DefaultTheme} from 'styled-components';

interface iTheme {
  light: DefaultTheme;
  dark: DefaultTheme;
}

const theme: iTheme = {
  light: {
    name: 'light',
    primary: '#34B67F',
    background: '#F8F8F8',
    icons: {
      fill: '#080B11',
      dark: {fill: '#080B11'},
      light: {fill: '#F8F8F8'},
    },
    button: {
      background: '#F8F8F8',
      secondary: '#26292C',
    },
    text: {
      dark: {
        title: '#36383A',
        subtitle: '#6C7278',
        paragraph: '#36383A',
      },
      light: {
        title: '#F8F8F8',
        subtitle: '#6C7278',
        paragraph: '#36383A',
      },
      title: '#080B11',
      subtitle: '#6C7278',
      paragraph: '#36383A',
    },
  },
  dark: {
    name: 'dark',
    primary: '#34B67F',
    background: '#080B11',
    icons: {
      fill: '#F8F8F8',
      dark: {fill: '#080B11'},
      light: {fill: '#F8F8F8'},
    },
    button: {
      background: '#1A1C1E',
      secondary: '#26292C',
    },
    text: {
      dark: {
        title: '#36383A',
        subtitle: '#6C7278',
        paragraph: '#36383A',
      },
      light: {
        title: '#F8F8F8',
        subtitle: '#6C7278',
        paragraph: '#36383A',
      },
      title: '#F8F8F8',
      subtitle: '#6C7278',
      paragraph: '#36383A',
    },
  },
};

export {theme};
