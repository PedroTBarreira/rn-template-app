import React from 'react';
import {TextProps} from 'react-native';
import CustomText from './styles';

interface iText extends TextProps {
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'small';
  color?: any;
}

const Text = ({type = 'h1', color, children, ...props}: iText) => {
  return (
    <CustomText type={type} color={color} {...props}>
      {children}
    </CustomText>
  );
};

export default Text;
