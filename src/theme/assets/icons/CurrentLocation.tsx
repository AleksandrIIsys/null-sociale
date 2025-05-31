import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { G } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color,
  style = {},
  disable,
}: IconProps & { disable: boolean }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 32 32"
    style={style}
  >
    <G opacity={disable ? 0.8 : 0.5}>
      <Rect
        width={32}
        height={32}
        fill={disable ? '#D6D6D6' : '#292929'}
        rx={16}
      />
      <Path
        fill={!disable ? '#ffffff' : '#9AA1B8'}
        d="M16 13.576a2.431 2.431 0 0 0-2.424 2.425A2.431 2.431 0 0 0 16 18.425 2.431 2.431 0 0 0 18.424 16 2.431 2.431 0 0 0 16 13.576Zm5.394 1.819c-.303-2.546-2.303-4.546-4.788-4.788V9.334h-1.212v1.273a5.303 5.303 0 0 0-4.788 4.788H9.333v1.212h1.273c.303 2.545 2.303 4.545 4.788 4.788v1.272h1.212v-1.272c2.545-.303 4.545-2.303 4.788-4.788h1.273v-1.212h-1.273ZM16 20.243a4.216 4.216 0 0 1-4.242-4.242A4.216 4.216 0 0 1 16 11.758a4.216 4.216 0 0 1 4.242 4.243A4.216 4.216 0 0 1 16 20.243Z"
      />
    </G>
  </Svg>
);
export default SvgComponent;
