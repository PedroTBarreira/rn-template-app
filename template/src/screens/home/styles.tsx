import styled from 'styled-components/native';
import metrics from '../../config/metrics';
import pr from 'pr-unit';

const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: ${metrics.paddings.body}px;
  background-color: ${props => props.theme.background};
`;

const Switch = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  height: ${100 * pr}px;
  justify-content: center;
  border-radius: ${metrics.radius.large}px;
  background-color: ${props => props.theme.button.background};
`;

export {Container, Switch};
