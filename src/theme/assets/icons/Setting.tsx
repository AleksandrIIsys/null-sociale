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
    fill={'none'}
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M11.25 10.504a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm1.655.75a3.001 3.001 0 0 1-5.81 0H6a1 1 0 0 1-1-1v-.75h2.17a3.001 3.001 0 0 1 5.66 0H26a1 1 0 0 1 1 1v.75H12.905Zm-7.905 6h14.095a3.001 3.001 0 0 0 5.81 0H26a1 1 0 0 0 1-1v-.75h-2.17a3.001 3.001 0 0 0-5.66 0H6a1 1 0 0 0-1 1v.75Zm7.905 6H27v-.75a1 1 0 0 0-1-1H12.83a3.001 3.001 0 0 0-5.66 0H5v.75a1 1 0 0 0 1 1h1.095a3.001 3.001 0 0 0 5.81 0Zm9.095-5.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-10.75 4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
