import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 18,
  height = 18,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 18 18'}
    style={style}
  >
    <Path
      fill="#6F6F6F"
      fillRule="evenodd"
      d="M16.5 1.25h-15a.25.25 0 0 0-.25.25v15c0 .138.112.25.25.25h15a.25.25 0 0 0 .25-.25v-15a.25.25 0 0 0-.25-.25ZM1.5 0A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0h-15Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
