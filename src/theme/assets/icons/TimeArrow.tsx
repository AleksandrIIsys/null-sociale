import * as React from 'react';
import { IconProps } from 'types/components/icon';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#292929',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill="none"
    style={style}
  >
    <Path
      fill={color}
      d="M6.293 9.343a1 1 0 0 0 0 1.414l4.95 4.95a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 0 0-1.415-1.414l-4.242 4.243-4.243-4.243a1 1 0 0 0-1.414 0Z"
    />
  </Svg>
);
export default SvgComponent;
