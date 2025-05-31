import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = 'none',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M13 5.75H6a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25ZM6 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#292929"
      d="M7 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Z"
    />
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M13 18.75H6a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25ZM6 17a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#292929"
      d="M7 20.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Z"
    />
    <Path
      fill="#292929"
      fillRule="evenodd"
      d="M26 5.75h-7a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25ZM19 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7Z"
      clipRule="evenodd"
    />
    <Path
      fill="#292929"
      d="M20 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4ZM20 20.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4ZM25 17.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2ZM25 25.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2ZM17 17.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2ZM17 25.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z"
    />
  </Svg>
);
export default SvgComponent;
