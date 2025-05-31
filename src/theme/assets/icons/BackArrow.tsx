import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const BackArrow = ({
  width = 24,
  height = 24,
  color = '#6F6F6F',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Path
      fill={color}
      d="m9.488 12.005 5.482 5.482a.75.75 0 0 1 0 1.06l-.53.531-6.013-6.013v.001l-.531-.53a.75.75 0 0 1 0-1.06l6.54-6.542.531.53a.75.75 0 0 1 0 1.061l-5.48 5.48Z"
    />
  </Svg>
);
export default BackArrow;
