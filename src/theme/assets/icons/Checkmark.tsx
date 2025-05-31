import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#292929',
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
      fillRule="evenodd"
      d="m19.879 7.702-7.913 9.891a1.25 1.25 0 0 1-1.86.103L5.588 13.18a1.25 1.25 0 0 1 0-1.768l.708-.707 4.61 4.611 6.435-8.042a1.25 1.25 0 0 1 1.757-.195l.78.624Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
