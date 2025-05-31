import * as React from 'react';
import Svg, { G, Mask, Path } from 'react-native-svg';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = '#6F6F6F',
  ...props
}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.465}
      d="M17.04 23.93h3.39"
    />
    <Mask id="a" width={28} height={28} x={2} y={2} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M2 2h28v28H2V2Z" />
    </Mask>
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.465}
      mask="url(#a)"
    >
      <Path d="M15.945 11.898h-4.922c-1.208 0-2.187.98-2.187 2.188v1.094h7.11a1.64 1.64 0 0 0 0-3.282ZM25.352 5.336H22.07a2.187 2.187 0 1 0 0 4.375h3.282V5.336ZM17.695 7.523h2.188M22.07 23.93a2.734 2.734 0 0 0 5.47 0M24.805 19.555a4.375 4.375 0 0 0-4.375 4.375h8.75a4.375 4.375 0 0 0-4.375-4.375Z" />
      <Path d="M24.55 9.711h-2.48c-.1 0-.199-.007-.295-.02l1.68 10.077a4.369 4.369 0 0 1 2.776.026L24.55 9.71ZM7.195 23.93a2.734 2.734 0 0 0 5.47 0M14.852 15.18H11.57a6.562 6.562 0 0 0-6.562 6.562v2.188h12.031v-6.563c0-1.208-.98-2.187-2.187-2.187ZM8.836 15.18H2.82V9.164h6.016v6.016Z" />
    </G>
  </Svg>
);
export default SvgComponent;
