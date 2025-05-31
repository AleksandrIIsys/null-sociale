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
      d="M20 6.74H4a.26.26 0 0 0-.26.26v10c0 .144.116.26.26.26h16a.26.26 0 0 0 .26-.26V7a.26.26 0 0 0-.26-.26ZM4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5Z"
      clipRule="evenodd"
    />
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M20 6.74H4a.26.26 0 0 0-.26.26v1.026l8.18 2.645a.259.259 0 0 0 .16 0l8.18-2.645V7a.26.26 0 0 0-.26-.26ZM3.574 7.973ZM4 5.5h16A1.5 1.5 0 0 1 21.5 7v1.2a1 1 0 0 1-.692.952l-8.347 2.699a1.5 1.5 0 0 1-.922 0L3.192 9.152a1 1 0 0 1-.692-.951V7A1.5 1.5 0 0 1 4 5.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
