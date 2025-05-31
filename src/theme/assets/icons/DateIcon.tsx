import * as React from 'react';
import Svg, { Defs, G, Path, ClipPath } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#6F6F6F',
  style = {},
}: IconProps) => (
  <Svg width={width} height={height} viewBox={'0 0 24 24'} style={style}>
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2Zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5Zm5 6H4v8h16v-8Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
