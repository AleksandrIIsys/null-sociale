import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = '#D90007',
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
      fill={color}
      fillRule="evenodd"
      d="M22.08 4a2 2 0 0 1 1.743 1.02l5.625 10a2 2 0 0 1 0 1.96l-5.625 10A2 2 0 0 1 22.08 28H9.92a2 2 0 0 1-1.744-1.02l-5.624-10a2 2 0 0 1 0-1.96l5.624-10A2 2 0 0 1 9.92 4H22.08Zm-4.173 5h-3.446l.596 8.819h2.272L17.907 9Zm-.482 11.115c-.333-.32-.75-.48-1.251-.48-.488 0-.899.16-1.232.48-.334.321-.501.739-.501 1.252 0 .475.167.882.5 1.223.334.34.745.51 1.233.51a1.7 1.7 0 0 0 1.232-.51c.347-.34.52-.748.52-1.223 0-.514-.167-.93-.5-1.252Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
