import {createContext, useState} from 'react';

interface iContext {
  themeStyle: 'light' | 'dark';
  updateTheme: any;
}

export const MainContext = createContext({} as iContext);

export const MainProvider = ({children}: any) => {
  const themeDefault = 'dark';
  const [themeStyle, setThemeStyle] = useState(
    themeDefault as 'light' | 'dark',
  );

  const updateTheme = () => {
    setThemeStyle(themeStyle === 'dark' ? 'light' : 'dark');
  };

  return (
    <MainContext.Provider value={{themeStyle, updateTheme}}>
      {children}
    </MainContext.Provider>
  );
};
