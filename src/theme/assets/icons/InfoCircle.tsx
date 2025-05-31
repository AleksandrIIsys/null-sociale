import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  style = {},
  color = 'none',
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 24 24'}
    style={style}
  >
    <Circle cx={12.022} cy={12.022} r={9.272} fill="#292929" />
    <Path
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Zm-.76-12c.206.199.46.298.76.298s.553-.1.759-.298a.97.97 0 0 0 .31-.726.97.97 0 0 0-.31-.726 1.053 1.053 0 0 0-.76-.298c-.3 0-.553.1-.76.298a.97.97 0 0 0-.309.726.97.97 0 0 0 .31.726Zm-.197 1.599v5.672h1.913V10.85h-1.913Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
