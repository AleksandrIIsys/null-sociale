import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill="#292929"
      d="M26.465 19.537a2.992 2.992 0 0 1-1.665-2.692V12.8a8.8 8.8 0 1 0-17.6 0v4.045a2.992 2.992 0 0 1-1.666 2.692A2.778 2.778 0 0 0 6.777 24.8h5.304a4 4 0 0 0 7.838 0h5.304a2.778 2.778 0 0 0 1.242-5.263ZM16 26.4a2.405 2.405 0 0 1-2.263-1.6h4.526A2.405 2.405 0 0 1 16 26.4Zm9.223-3.2H6.777a1.178 1.178 0 0 1-.526-2.231A4.584 4.584 0 0 0 8.8 16.845V12.8a7.2 7.2 0 1 1 14.4 0v4.045a4.585 4.585 0 0 0 2.548 4.124 1.178 1.178 0 0 1-.525 2.23Z"
    />
  </Svg>
);
export default SvgComponent;
