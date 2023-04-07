import {PixelRatio, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

import metrics from '../../../config/metrics';
import pr from 'pr-unit';

interface iContainer extends TouchableOpacityProps {
  isFirst?: boolean;
  isLast?: boolean;
}

const Container = styled.TouchableOpacity<iContainer>`
  min-width: ${pr * 400}px;
  align-items: center;
  background-color: ${props => props.theme.card.background};
  padding: ${metrics.paddings.bigger}px;
  border-radius: ${metrics.radius.medium}px;
  margin-left: ${props => (props.isFirst ? metrics.paddings.body : 0)}px;
  margin-right: ${props => (props.isLast ? metrics.paddings.body : 0)}px;
`;

const IconBackground = styled.View`
  width: ${150 * pr}px;
  height: ${150 * pr}px;
  justify-content: center;
  border-radius: ${750 * pr}px;
  align-items: center;
  padding: ${metrics.paddings.small}px;
  background-color: ${props => props.theme.card.secondary};
`;

export {Container, IconBackground};
