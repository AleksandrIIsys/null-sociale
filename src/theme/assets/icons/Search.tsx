import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 24,
  height = 24,
  color = '#000000',
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
      d="M11.111 17.057c3.23 0 5.861-2.637 5.861-5.906 0-3.27-2.631-5.906-5.86-5.906-3.23 0-5.862 2.637-5.862 5.906 0 3.27 2.632 5.906 5.861 5.906Zm0 1.25a7.057 7.057 0 0 0 4.597-1.696l2.877 2.878a.75.75 0 0 0 1.061 0l.354-.354-3.415-3.415a7.154 7.154 0 0 0 1.637-4.569c0-3.952-3.183-7.156-7.11-7.156C7.183 3.995 4 7.2 4 11.151c0 3.952 3.184 7.156 7.111 7.156ZM6.757 11.25c.412 0 .739-.335.823-.738a3.79 3.79 0 0 1 2.932-2.932c.403-.084.738-.412.738-.823V6.25a5 5 0 0 0-5 5h.507Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
