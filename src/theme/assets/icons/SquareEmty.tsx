import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 56,
  height = 56,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 56 56'}
    style={style}
  >
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M46 9.5H10a.5.5 0 0 0-.5.5v36a.5.5 0 0 0 .5.5h36a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM10 7a3 3 0 0 0-3 3v36a3 3 0 0 0 3 3h36a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3H10Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
