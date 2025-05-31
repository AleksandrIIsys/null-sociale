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
      fill="#1877F2"
      d="M20.893 12.054C20.893 7.053 16.84 3 11.839 3c-5 0-9.053 4.053-9.053 9.054 0 4.52 3.31 8.264 7.639 8.943v-6.326h-2.3v-2.617h2.3v-1.995c0-2.269 1.35-3.522 3.42-3.522.99 0 2.026.176 2.026.176v2.228h-1.142c-1.125 0-1.475.699-1.475 1.415v1.698h2.51l-.4 2.617h-2.11v6.326a9.055 9.055 0 0 0 7.639-8.943Z"
    />
  </Svg>
);
export default SvgComponent;
