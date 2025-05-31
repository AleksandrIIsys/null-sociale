import * as React from 'react';
import { Path } from 'react-native-svg';
import Svg from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 56,
  height = 56,
  color = '#FE8234',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill="#292929"
      d="m6.357 44.593 19-35.625c1.13-2.118 4.165-2.118 5.294 0l19 35.625c1.066 1.998-.382 4.412-2.647 4.412h-38c-2.265 0-3.713-2.414-2.647-4.412Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="m25.353 8.963-19 35.625C5.287 46.587 6.735 49 9 49h38c2.265 0 3.713-2.413 2.647-4.412l-19-35.625c-1.13-2.117-4.165-2.117-5.294 0Zm5.56 11.736h-5.347l.926 13.68h3.525l.896-13.68Zm-.747 17.244c-.517-.498-1.165-.747-1.941-.747-.757 0-1.394.249-1.912.747-.517.498-.776 1.145-.776 1.941 0 .737.259 1.37.776 1.897.518.528 1.155.791 1.912.791.737 0 1.374-.263 1.911-.791.538-.528.807-1.16.807-1.897 0-.796-.259-1.444-.777-1.941Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
