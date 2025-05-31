import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  style = {},
  color = '#FFBC0D',
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M6 26.754h20a.25.25 0 0 0 .25-.25v-12a.25.25 0 0 0-.1-.2l-10-7.5a.25.25 0 0 0-.3 0l-10 7.5a.25.25 0 0 0-.1.2v12c0 .138.112.25.25.25Zm20 1.75H6a2 2 0 0 1-2-2v-12a2 2 0 0 1 .8-1.6l10-7.5a2 2 0 0 1 2.4 0l10 7.5a2 2 0 0 1 .8 1.6v12a2 2 0 0 1-2 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
