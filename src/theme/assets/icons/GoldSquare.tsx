import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill="#FFBC0D"
      d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
    />
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="m23.07 11.574-7 10a1 1 0 0 1-1.527.133L9.75 16.914a1 1 0 0 1 0-1.414l.707-.707 4.657 4.657 5.743-8.204A1 1 0 0 1 22.25 11l.82.574Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
