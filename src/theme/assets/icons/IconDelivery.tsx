import * as React from 'react';
import Svg, { G, Mask, Path } from 'react-native-svg';
const SvgComponent = ({ width = 32, height = 32, ...props }: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    {...props}
  >
    <Path fill="#FFBC0D" d="M17.04 23.7h3.39-3.39Z" />
    <Path
      stroke="#FFBC0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.465}
      d="M17.04 23.7h3.39"
    />
    <Mask id="a" width={28} height={28} x={2} y={2} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M2 2h28v28H2V2Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FFBC0D"
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M15.945 11.898h-4.922c-1.208 0-2.187.98-2.187 2.188v1.094h7.11a1.64 1.64 0 0 0 0-3.282ZM25.352 5.336H22.07a2.187 2.187 0 1 0 0 4.375h3.282V5.336Z"
      />
      <Path fill="#FFBC0D" d="M17.695 7.523h2.188-2.188Z" />
      <Path
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M17.695 7.523h2.188"
      />
      <Path fill="#FFBC0D" d="M22.07 23.93a2.734 2.734 0 0 0 5.47 0" />
      <Path
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M22.07 23.93a2.734 2.734 0 0 0 5.47 0"
      />
      <Path
        fill="#FFBC0D"
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M24.805 19.555a4.375 4.375 0 0 0-4.375 4.375h8.75a4.375 4.375 0 0 0-4.375-4.375Z"
      />
      <Path
        fill="#FFBC0D"
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M24.55 9.711h-2.48c-.1 0-.199-.007-.295-.02l1.68 10.077a4.369 4.369 0 0 1 2.776.026L24.55 9.71Z"
      />
      <Path fill="#FFBC0D" d="M7.195 23.93a2.734 2.734 0 0 0 5.47 0" />
      <Path
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M7.195 23.93a2.734 2.734 0 0 0 5.47 0"
      />
      <Path
        fill="#FFBC0D"
        stroke="#FFBC0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M14.852 15.18H11.57a6.562 6.562 0 0 0-6.562 6.562v2.188h12.031v-6.563c0-1.208-.98-2.187-2.187-2.187ZM8.836 15.18H2.82V9.164h6.016v6.016Z"
      />
    </G>
    <Path
      fill="#F9F9F9"
      d="M20.808 25.388a4 4 0 1 1 7.98.402l-.955-.096a3.04 3.04 0 1 0-6.064-.306h-.96ZM21 10h5v1h-5zM5.81 25.498a4 4 0 1 1 7.988.183l-.958-.07a3.038 3.038 0 0 0-2.962-3.262 3.04 3.04 0 0 0-3.108 3.123l-.96.026Z"
    />
  </Svg>
);
export default SvgComponent;
