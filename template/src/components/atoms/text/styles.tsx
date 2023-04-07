import {useContext} from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

import {theme} from '../../../assets/theme';
import metrics from '../../../config/metrics';

interface iText extends TextProps {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'small';
  color?: any;
}

const size = {
  h1: metrics.fonts.title,
  h2: metrics.fonts.subtitle,
  h3: metrics.fonts.paragraph,
  p: metrics.fonts.paragraph,
  small: metrics.fonts.paragraph / 1.3,
};

const color = {
  h1: {
    dark: theme['dark'].text.title,
    light: theme['light'].text.title,
  },
  h2: {
    dark: theme['dark'].text.title,
    light: theme['light'].text.title,
  },
  h3: {
    dark: theme['dark'].text.title,
    light: theme['light'].text.title,
  },
  p: {
    dark: theme['dark'].text.title,
    light: theme['light'].text.title,
  },
  small: {
    dark: theme['dark'].text.title,
    light: theme['light'].text.title,
  },
};

const CustomText = styled.Text<iText>`
  font-family: 'Inter';
  font-size: ${props => size[props.type]}px;
  font-weight: ${props =>
    props.type === 'p' || props.type === 'small' ? 500 : 'bold'};
  color: ${props => props.color ?? color[props.type][props.theme.name]};
`;

export default CustomText;
