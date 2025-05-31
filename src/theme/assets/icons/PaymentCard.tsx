import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = '#FFBC0D',
  ...props
}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 33'}
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M26.75 9.254H5.25a.25.25 0 0 0-.25.25v3.25h22v-3.25a.25.25 0 0 0-.25-.25Zm2 5.25v-5a2 2 0 0 0-2-2H5.25a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h21.5a2 2 0 0 0 2-2v-9Zm-23.75 9v-9h22v9a.25.25 0 0 1-.25.25H5.25a.25.25 0 0 1-.25-.25Zm2-3.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1-1.5-1.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
