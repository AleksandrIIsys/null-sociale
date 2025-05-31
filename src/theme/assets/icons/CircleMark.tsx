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
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 1.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
