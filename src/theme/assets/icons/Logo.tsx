import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({
  width = 56,
  height = 56,
  color = '#FFBC0D',
  ...props
}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 56 56'}
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M37.187 12.274c3.624 0 6.561 15.266 6.561 34.098H49C49 26.09 43.71 9.65 37.187 9.65c-3.711 0-7.022 4.942-9.187 12.668-2.165-7.726-5.476-12.668-9.187-12.668C12.29 9.65 7 26.09 7 46.372h5.252c0-18.832 2.938-34.098 6.56-34.098 3.625 0 6.563 14.092 6.563 31.474h5.25c0-17.382 2.938-31.474 6.562-31.474Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
