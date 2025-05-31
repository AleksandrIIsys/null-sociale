import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 56,
  height = 56,
  color = '#292929',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 56 56'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M47.5 28c0 10.77-8.73 19.5-19.5 19.5S8.5 38.77 8.5 28 17.23 8.5 28 8.5 47.5 17.23 47.5 28Zm2.5 0c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22ZM26.005 16.995h.75c.966 0 1.75.784 1.75 1.75v9.687l4.225 4.226-.53.53a1.75 1.75 0 0 1-2.475 0l-3.693-3.693h-.027v-12.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
