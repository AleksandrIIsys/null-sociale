import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#FFBC0D',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill="none"
    style={style}
  >
    <Path
      fill={color}
      d="M11.321 3.447a.75.75 0 0 1 1.358 0l2.377 5.065a.15.15 0 0 0 .113.084l5.388.823a.75.75 0 0 1 .424 1.265l-3.928 4.026a.15.15 0 0 0-.04.13l.919 5.636a.75.75 0 0 1-1.103.777l-4.757-2.629a.15.15 0 0 0-.145 0l-4.756 2.63a.75.75 0 0 1-1.103-.778l.92-5.637a.15.15 0 0 0-.04-.129l-3.929-4.026a.75.75 0 0 1 .424-1.265l5.388-.823a.15.15 0 0 0 .113-.084l2.377-5.065Z"
    />
  </Svg>
);
export default SvgComponent;
