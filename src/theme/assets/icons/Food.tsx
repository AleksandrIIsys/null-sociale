import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
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
      fillRule="evenodd"
      d="M13.185 2.5a.75.75 0 0 0-.75.75v8.522a6.938 6.938 0 0 1-.737 0V3.987a.75.75 0 0 0-.75-.75h-.5v8.352a6.786 6.786 0 0 1-.776-.237V4.71h-.5a.75.75 0 0 0-.75.75v5.271a6.613 6.613 0 0 1-.776-.575V6.34a.75.75 0 0 0-.75-.75h-.5v3.13a7.136 7.136 0 0 1-.225-.367h-.379a.982.982 0 0 0-.976 1.086L5.94 19.978a1.5 1.5 0 0 0 2.184 1.171l.247-.128a8 8 0 0 1 7.39 0l.247.128a1.5 1.5 0 0 0 2.184-1.171L19.316 9.44a.982.982 0 0 0-.976-1.086h-.38a7.057 7.057 0 0 1-.224.367V5.59h-.5a.75.75 0 0 0-.75.75v3.814a6.614 6.614 0 0 1-.776.576V4.723a.75.75 0 0 0-.75-.75h-.5v7.38a6.794 6.794 0 0 1-.775.236V2.5h-.5Zm-7.001 7.978c3.136 3.405 8.628 3.405 11.765 0l-1 9.367a.25.25 0 0 1-.364.195l-.246-.128a9.25 9.25 0 0 0-8.546 0l-.246.128a.25.25 0 0 1-.364-.195l-1-9.367Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
