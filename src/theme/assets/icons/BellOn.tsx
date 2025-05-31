import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
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
      d="M19.849 14.653a2.243 2.243 0 0 1-1.25-2.02V9.6A6.6 6.6 0 1 0 5.4 9.6v3.034a2.244 2.244 0 0 1-1.25 2.019 2.084 2.084 0 0 0 .933 3.947h3.978a3 3 0 0 0 5.878 0h3.978a2.083 2.083 0 0 0 .931-3.947ZM12 19.8a1.804 1.804 0 0 1-1.697-1.2h3.394A1.804 1.804 0 0 1 12 19.8Zm6.917-2.4H5.083a.883.883 0 0 1-.395-1.673A3.437 3.437 0 0 0 6.6 12.633V9.6a5.4 5.4 0 1 1 10.8 0v3.034a3.439 3.439 0 0 0 1.911 3.092.884.884 0 0 1-.394 1.674Z"
    />
    <Circle cx={17.4} cy={5.924} r={3.6} fill="#D90007" />
  </Svg>
);
export default SvgComponent;
