import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 16,
  height = 16,
  style = {},
  color = 'none',
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 16 16'}
    style={style}
  >
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="m7.606 3.88.707-.707a.714.714 0 0 1 1.01 0l3.637 3.636h.001l.808.808a.571.571 0 0 1 0 .808l-4.424 4.424a.714.714 0 0 1-1.01 0l-.707-.707L10.869 8.9H2.714A.714.714 0 0 1 2 8.186v-1h8.912L7.606 3.88Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
