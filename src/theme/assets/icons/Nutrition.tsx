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
      d="M3.04 3.74A.749.749 0 0 1 3 3.5V3h18v.5a.747.747 0 0 1-.75.75h-7.625V6H13a8 8 0 0 1 8 8v5.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V14a8 8 0 0 1 8-8h.375V4.25H3.75a.75.75 0 0 1-.71-.51ZM13 7.25h-2A6.75 6.75 0 0 0 4.25 14v5.5c0 .138.112.25.25.25h15a.25.25 0 0 0 .25-.25V14A6.75 6.75 0 0 0 13 7.25ZM15.75 14a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM17 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-6.563-1.231a.46.46 0 0 1 .609-.608l1.964.873a1.288 1.288 0 1 1-1.7 1.7l-.873-1.965Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
