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
    fill={'none'}
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M16.25 6a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0ZM18 3a3 3 0 0 0-2.905 3.754l-6.75 3.375a3 3 0 1 0 0 3.743l6.75 3.375A3.005 3.005 0 0 0 18 21a3 3 0 1 0-2.345-4.871l-6.75-3.376a3.006 3.006 0 0 0 0-1.507l6.75-3.375A3 3 0 1 0 18 3Zm-1.75 15a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0ZM6 13.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
