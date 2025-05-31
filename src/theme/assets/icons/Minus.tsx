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
    fill="none"
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Path
      fill={color}
      d="M19.5 12.75H5.25A.75.75 0 0 1 4.5 12v-.75h14.25a.75.75 0 0 1 .75.75v.75Z"
    />
  </Svg>
);
export default SvgComponent;
