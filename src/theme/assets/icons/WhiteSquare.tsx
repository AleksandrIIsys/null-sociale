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
      fill="#292929"
      fillRule="evenodd"
      d="M26 5.75H6a.25.25 0 0 0-.25.25v20c0 .138.112.25.25.25h20a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25ZM6 4h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
