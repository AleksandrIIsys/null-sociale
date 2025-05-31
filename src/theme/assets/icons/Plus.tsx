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
    viewBox="0 0 24 24"
    fill="none"
    style={style}
  >
    <Path
      fill={color}
      d="M12.75 11.25V4.5H12a.75.75 0 0 0-.75.75v6H4.5V12c0 .414.336.75.75.75h6v6.75H12a.75.75 0 0 0 .75-.75v-6h6.75V12a.75.75 0 0 0-.75-.75h-6Z"
    />
  </Svg>
);
export default SvgComponent;
