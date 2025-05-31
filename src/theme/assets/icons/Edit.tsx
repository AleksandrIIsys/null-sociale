import * as React from 'react';
import { IconProps } from 'types/components/icon';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#292929',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="m17.397 3.945 2.708 2.708a.25.25 0 0 1 0 .353L18.483 8.63 15.42 5.566l1.623-1.622a.25.25 0 0 1 .353 0ZM5.573 15.415l8.964-8.964 3.061 3.061-8.964 8.964-3.06-3.061Zm-1.768 0-.383.384a1.5 1.5 0 0 0-.431.9l-.427 3.96a.75.75 0 0 0 .826.827l3.961-.427a1.5 1.5 0 0 0 .9-.431L20.989 7.89a1.5 1.5 0 0 0 0-2.121L18.28 3.06a1.5 1.5 0 0 0-2.121 0l-1.623 1.622-.884.884-8.964 8.964-.884.884Zm.884.884L7.75 19.36l-.383.384a.25.25 0 0 1-.15.072l-3.344.36.36-3.343a.25.25 0 0 1 .073-.15l.383-.384Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
