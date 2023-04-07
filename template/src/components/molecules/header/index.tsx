import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import Text from '../../atoms/text';
import {theme} from '../../../assets/theme';
import metrics from '../../../config/metrics';
import {MainContext} from '../../../context/main';

import {Box, Button, Container, GoBack} from './styles';
import Divider from '../../atoms/divider';
import {useNavigation} from '@react-navigation/native';

interface iHeader {
  title: string;
  icon?: string;
  type?: 'back' | 'default';
  button?: {
    icon?: string;
    text?: string;
    color?: string;
    onPress?: any;
  };
}

const Header = ({type = 'default', title, icon, button}: iHeader) => {
  const navigation = useNavigation();
  const {themeStyle} = useContext(MainContext);

  return (
    <ThemeProvider theme={theme[themeStyle]}>
      <Container>
        <Box>
          {type !== 'default' && (
            <GoBack onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-left"
                color={theme[themeStyle].icons.fill}
                size={metrics.icons.medium}
              />
              <Divider />
            </GoBack>
          )}
          <Text
            color={
              type === 'default'
                ? theme[themeStyle].text.light.title
                : theme[themeStyle].text.title
            }>
            {title}
          </Text>
        </Box>
        {icon && (
          <Icon
            name={icon}
            color={theme[themeStyle].icons.light.fill}
            size={metrics.icons.medium}
          />
        )}

        {button && (
          <Button bg={button.color}>
            {button.text && (
              <Text type="p" color={theme[themeStyle].text.light.title}>
                {button.text}
              </Text>
            )}
            {button.icon && (
              <Icon
                name={button.icon}
                color={theme[themeStyle].icons.light.fill}
                size={metrics.icons.medium}
              />
            )}
          </Button>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Header;
