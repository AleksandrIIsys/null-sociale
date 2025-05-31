import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 16,
  height = 17,
  color = '#292929',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={'0 0 16 17'}
    fill="none"
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M4.65 3v7.75h6.75V3H4.65Zm-1 0v11a1 1 0 0 0 1 1h6.75a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4.65a1 1 0 0 0-1 1Zm7.75 11v-2.25H4.65V14h6.75ZM8 13.4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
