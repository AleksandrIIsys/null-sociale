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
    fill={'none'}
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Path
      fill={color}
      d="M18.402 7.768a.67.67 0 0 1-.67-.67V5.09H5.01a.623.623 0 0 0-.462.194.67.67 0 0 0-.208.476.67.67 0 0 1-1.339 0A2.009 2.009 0 0 1 5.009 3.75h12.723a1.34 1.34 0 0 1 1.34 1.34v2.008a.67.67 0 0 1-.67.67Z"
    />
    <Path
      fill={color}
      d="M20.41 19.821H4.34A1.34 1.34 0 0 1 3 18.482V5.76a.67.67 0 1 1 1.34 0 .67.67 0 0 0 .669.67H20.41a1.34 1.34 0 0 1 1.339 1.339v10.714a1.34 1.34 0 0 1-1.34 1.34ZM4.34 7.654v10.828h16.07V7.768H5.01c-.228 0-.455-.038-.67-.114Z"
    />
    <Path
      fill={color}
      d="M21.08 15.804h-6.796a1.962 1.962 0 0 1-1.908-2.01v-1.339a1.962 1.962 0 0 1 1.908-2.009h6.797a.67.67 0 0 1 0 1.34h-6.797a.67.67 0 0 0-.57.67v1.339a.67.67 0 0 0 .57.67h6.797a.67.67 0 1 1 0 1.339Z"
    />
  </Svg>
);
export default SvgComponent;
