import * as React from 'react';
import { Path } from 'react-native-svg';
import Svg from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 16,
  height = 16,
  color = '#292929',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 16 16'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M13.25 8.5a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Zm1 0a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Zm-6.747-3v3.497L7.5 9l1.414 1.414a.5.5 0 0 0 .707 0l.354-.353-1.472-1.472V6a.5.5 0 0 0-.5-.5h-.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
