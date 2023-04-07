import {useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';

import {MainContext} from '../../context/main';

import {Container, Switch} from './styles';
import {theme} from '../../assets/theme';
import {Text} from '../../components';

const Home: React.FC = ({navigation}: any) => {
  const {themeStyle, updateTheme} = useContext(MainContext);

  return (
    <ThemeProvider theme={theme[themeStyle]}>
      <Container source={require('../../assets/images/bg.webp')}>
        <StatusBar barStyle={`light-content`} />

        <Switch onPress={updateTheme}>
          <Text type="h3">{themeStyle === 'dark' ? 'Light' : 'Dark'}</Text>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
