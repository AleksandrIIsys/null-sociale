import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 328,
  height = 328,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 328 328'}
    style={style}
  >
    <Path
      fill="#F1F1F1"
      fillRule="evenodd"
      d="M165 328c45.84 0 83-3.806 83-8.5s-37.16-8.5-83-8.5-83 3.806-83 8.5 37.16 8.5 83 8.5Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M188.906 135.715c9.233 0 16.714 39.08 16.714 87.285H219c0-51.917-13.475-94-30.094-94-9.456 0-17.891 12.651-23.406 32.427C159.985 141.651 151.55 129 142.094 129 125.479 129 112 171.083 112 223h13.38c0-48.205 7.485-87.285 16.714-87.285 9.233 0 16.718 36.073 16.718 80.57h13.376c0-44.497 7.485-80.57 16.718-80.57Z"
      clipRule="evenodd"
    />
    <Path
      fill="#ADADAD"
      d="M155 245h20v72.043S175 321 165 321s-10-3.957-10-3.957V245Z"
    />
    <Path fill="#292929" d="M155 245h20v16h-20z" opacity={0.1} />
    <Path
      fill="#DB0007"
      d="M98.337 205h133.326a3 3 0 0 1 2.807 4.058l-10.555 28a2.998 2.998 0 0 1-2.807 1.942H108.891a3 3 0 0 1-2.807-1.942l-10.554-28A3 3 0 0 1 98.337 205Z"
    />
  </Svg>
);
export default SvgComponent;
