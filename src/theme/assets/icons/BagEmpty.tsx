import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 140,
  height = 140,
  style = {},
  color = 'none',
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 141 140'}
    style={style}
  >
    <Path
      fill="#C2945C"
      fillRule="evenodd"
      d="m30.353 26.766 5.018 5.147 5.019-5.147 5.018 5.147 5.018-5.147 5.019 5.147 5.018-5.147 5.019 5.147 5.018-5.147 5.018 5.147 5.019-5.147 5.018 5.147 5.018-5.147 5.019 5.147 5.018-5.147 5.019 5.147 5.018-5.147v102.941a4.117 4.117 0 0 1-4.118 4.117H34.471a4.117 4.117 0 0 1-4.118-4.117V26.766Z"
      clipRule="evenodd"
    />
    <Path
      fill="#DB0007"
      fillRule="evenodd"
      d="M30.353 114.266h80.294v15.441a4.117 4.117 0 0 1-4.118 4.117H34.471a4.117 4.117 0 0 1-4.118-4.117v-15.441Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M110.647 52.202a9.322 9.322 0 0 0-1.996-.218c-8.545 0-16.176 11.014-21.164 28.231-4.991-17.217-12.619-28.23-21.17-28.23-15.025 0-27.214 36.638-27.214 81.838H51.2c0-41.964 6.772-75.995 15.116-75.995 8.353 0 15.122 31.41 15.122 70.151h12.094c0-38.741 6.775-70.151 15.119-70.151.678 0 1.345.224 1.998.658-.002-3.928-.002-1.87-.002-6.284Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
