import styled from 'styled-components/native';
import metrics from '../../../config/metrics';
import {TouchableOpacityProps} from 'react-native';

interface iButton extends TouchableOpacityProps {
  bg?: string;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const GoBack = styled.TouchableOpacity``;

const Box = styled.View``;

const Button = styled.TouchableOpacity<iButton>`
  gap: 5px;
  flex-direction: row;
  background-color: ${props => props.bg ?? props.theme.card.background};
  padding: ${metrics.paddings.small}px ${metrics.paddings.medium}px;
  border-radius: ${metrics.radius.medium}px;
`;

export {Container, GoBack, Box, Button};
