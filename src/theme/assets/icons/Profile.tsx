import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#292929',
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
      d="M12 12.75a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM12 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.846 13.006c-2.328 1.176-4.099 3.639-4.507 6.665v.008a.063.063 0 0 0 .01.016.21.21 0 0 0 .151.055h15a.21.21 0 0 0 .15-.055.063.063 0 0 0 .012-.016v-.008c-.41-3.026-2.18-5.489-4.508-6.665A5.479 5.479 0 0 1 12 14a5.48 5.48 0 0 1-3.154-.994Zm.197-1.454C5.933 12.754 3.6 15.796 3.1 19.504 2.99 20.325 3.672 21 4.5 21h15c.828 0 1.51-.675 1.4-1.496-.5-3.708-2.834-6.75-5.943-7.952A4.236 4.236 0 0 1 12 12.75a4.236 4.236 0 0 1-2.957-1.198Zm-4.705 8.129Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
