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
    viewBox={'0 0 56 56'}
    style={style}
  >
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M28 47.5c10.77 0 19.5-8.73 19.5-19.5S38.77 8.5 28 8.5 8.5 17.23 8.5 28 17.23 47.5 28 47.5Zm0 2.5c12.15 0 22-9.85 22-22S40.15 6 28 6 6 15.85 6 28s9.85 22 22 22Z"
      clipRule="evenodd"
    />
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M27.682 21.408c-.783 0-1.443-.267-1.981-.8a2.64 2.64 0 0 1-.808-1.948c0-.765.27-1.414.808-1.948.538-.533 1.198-.8 1.981-.8.783 0 1.444.267 1.982.8a2.64 2.64 0 0 1 .807 1.948 2.64 2.64 0 0 1-.807 1.948c-.538.533-1.199.8-1.982.8Zm-2.495 18.71v-15.22h4.99v15.22h-4.99Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
