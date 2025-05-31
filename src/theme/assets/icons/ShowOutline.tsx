import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 56,
  height = 56,
  color = '#000000',
  style,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={'0 0 56 56'}
    fill="none"
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M28 20.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM23.25 28a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M7.121 30.121a3 3 0 0 1 0-4.243l6.03-6.029c8.2-8.201 21.497-8.201 29.698 0l6.03 6.03a3 3 0 0 1 0 4.242l-6.03 6.03c-8.2 8.2-21.497 8.2-29.698 0l-6.03-6.03Zm1.768-2.475 6.03-6.03c7.224-7.224 18.938-7.224 26.162 0l6.03 6.03a.5.5 0 0 1 0 .707l-6.03 6.03c-7.224 7.224-18.938 7.224-26.163 0l-6.029-6.03a.5.5 0 0 1 0-.707Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
