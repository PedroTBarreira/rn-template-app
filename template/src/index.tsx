import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/app.default';
import {MainProvider} from './context/main';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainProvider>
        <Routes />
      </MainProvider>
    </NavigationContainer>
  );
};

export default App;
