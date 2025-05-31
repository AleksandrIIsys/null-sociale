import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#D90007',
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
      d="m12.001 13.062 6.186 6.186.53-.53a.75.75 0 0 0 0-1.061L13.062 12l6.187-6.187-.53-.53a.75.75 0 0 0-1.06 0L12 10.94 5.813 4.752l-.53.53a.75.75 0 0 0 0 1.06l5.657 5.659-6.187 6.187.53.53a.75.75 0 0 0 1.061 0l5.657-5.656Z"
    />
  </Svg>
);
export default SvgComponent;
