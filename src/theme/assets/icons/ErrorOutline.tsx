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
      d="M22.08 5.75H9.92a.25.25 0 0 0-.218.127l-5.625 10a.25.25 0 0 0 0 .246l5.625 10a.25.25 0 0 0 .218.127h12.16a.25.25 0 0 0 .218-.127l5.625-10a.25.25 0 0 0 0-.246l-5.625-10a.25.25 0 0 0-.218-.127Zm0-1.75a2 2 0 0 1 1.744 1.02l5.625 10a2 2 0 0 1 0 1.96l-5.626 10A2 2 0 0 1 22.08 28H9.92a2 2 0 0 1-1.743-1.02l-5.625-10a2 2 0 0 1 0-1.96l5.625-10A2 2 0 0 1 9.92 4h12.16Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M14.46 9h3.447l-.577 8.819h-2.272L14.46 9Zm1.714 10.634c.5 0 .918.16 1.252.481.333.321.5.739.5 1.252 0 .475-.173.882-.52 1.223a1.7 1.7 0 0 1-1.232.51c-.488 0-.899-.17-1.232-.51-.334-.34-.5-.748-.5-1.223 0-.514.166-.93.5-1.252a1.71 1.71 0 0 1 1.232-.48Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
