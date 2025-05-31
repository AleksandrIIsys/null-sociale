import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = '#6F6F6F',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M5.429 16.286a1.714 1.714 0 1 0 3.428 0 1.714 1.714 0 0 0-3.428 0Zm1.714-3.143a3.143 3.143 0 1 0 0 6.286 3.143 3.143 0 0 0 0-6.286ZM14.571 16.286a1.714 1.714 0 1 0 3.429 0 1.714 1.714 0 0 0-3.429 0Zm1.715-3.143a3.143 3.143 0 1 0 0 6.285 3.143 3.143 0 0 0 0-6.285ZM23.143 16.286a1.714 1.714 0 1 0 3.428 0 1.714 1.714 0 0 0-3.428 0Zm1.714-3.143a3.143 3.143 0 1 0 0 6.285 3.143 3.143 0 0 0 0-6.285Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
