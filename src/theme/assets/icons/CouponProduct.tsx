import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 16,
  height = 16,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 16 16'}
    style={style}
  >
    <Path
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M8.695 1.47a1 1 0 0 0-.849.284L1.707 7.893a1 1 0 0 0 0 1.414l4.986 4.986a1 1 0 0 0 1.414 0l6.14-6.14a1 1 0 0 0 .282-.848l-.623-4.362a1 1 0 0 0-.849-.849l-4.362-.623Zm.597 5.176a1.508 1.508 0 1 0 2.133-2.133 1.508 1.508 0 0 0-2.133 2.133Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
