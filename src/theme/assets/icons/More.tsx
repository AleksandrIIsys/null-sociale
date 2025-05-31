import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = '#FFBC0D',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill={color}
      d="M4 16.286a3.143 3.143 0 1 1 6.286 0 3.143 3.143 0 0 1-6.286 0ZM13.143 16.286a3.143 3.143 0 1 1 6.286 0 3.143 3.143 0 0 1-6.286 0ZM21.714 16.286a3.143 3.143 0 1 1 6.286 0 3.143 3.143 0 0 1-6.286 0Z"
    />
  </Svg>
);
export default SvgComponent;
