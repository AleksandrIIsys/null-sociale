import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
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
    <Circle cx={12} cy={12} r={9.25} fill="#292929" />
    <Path
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Zm-.09-5.06 5.447-7.5-.607-.44a.75.75 0 0 0-1.048.166l-4.485 6.176L7.785 11.1l-.535.526a.75.75 0 0 0-.01 1.06l3.528 3.59a.75.75 0 0 0 1.142-.084Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
