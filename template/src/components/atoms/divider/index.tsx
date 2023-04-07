import React from 'react';
import {PixelRatio} from 'react-native';

import {Spacer} from './styles';

interface iDivider {
  size?: 'sm' | 'md' | 'lg';
}

const Divider = ({size = 'md'}: iDivider) => {
  const divider = {
    sm: <Spacer style={{padding: PixelRatio.getPixelSizeForLayoutSize(2)}} />,
    md: <Spacer style={{padding: PixelRatio.getPixelSizeForLayoutSize(3)}} />,
    lg: <Spacer style={{padding: PixelRatio.getPixelSizeForLayoutSize(5)}} />,
  };

  return divider[size];
};

export default Divider;
