import pr from 'pr-unit';
import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import {Container, IconBackground} from './styles';
import Text from '../../atoms/text';
import Divider from '../../atoms/divider';
import {theme} from '../../../assets/theme';
import {MainContext} from '../../../context/main';

interface iButton {
  isFirst?: boolean;
  isLast?: boolean;
  onPress: any;
  text: string;
  icon: {
    name: string;
    color: string;
  };
}

const Button = ({onPress, text, icon, isFirst, isLast}: iButton) => {
  const {themeStyle} = useContext(MainContext);

  return (
    <ThemeProvider theme={theme[themeStyle]}>
      <Container isFirst={isFirst} isLast={isLast} onPress={onPress}>
        <IconBackground>
          <Icon color={icon.color} name={icon.name} size={60 * pr} />
        </IconBackground>
        <Divider size="lg" />
        <Text type="h3" color={theme[themeStyle].text.light.title}>
          {text}
        </Text>
      </Container>
    </ThemeProvider>
  );
};

export default Button;
