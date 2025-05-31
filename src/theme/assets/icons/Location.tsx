import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#FFBC0D',
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
      fillRule="evenodd"
      d="M19 8.486C19 4.904 16.09 2 12.5 2S6 4.904 6 8.486C6 11.5 8.676 17.207 10.7 20.5c.743 1.208 1.3 1.5 1.8 1.5s1.057-.292 1.8-1.5c2.023-3.293 4.7-9 4.7-12.014Zm-4.25.014a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
