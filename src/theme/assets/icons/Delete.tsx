import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
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
      d="M18.814 6.977a.628.628 0 0 0-.628-.628H6.465a.628.628 0 0 0-.628.628v11.302A2.718 2.718 0 0 0 8.557 21h7.536a2.718 2.718 0 0 0 2.72-2.72V6.976Zm-1.256.628v10.674c0 .389-.154.761-.43 1.036-.274.275-.647.43-1.035.43H8.558c-.389 0-.761-.155-1.036-.43a1.462 1.462 0 0 1-.43-1.036V7.605h10.466Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M16.093 7.605a.628.628 0 0 0 .628-.628V5.302c0-.61-.242-1.196-.674-1.628A2.306 2.306 0 0 0 14.42 3h-4.186c-.61 0-1.196.243-1.628.674a2.306 2.306 0 0 0-.674 1.628v1.675c0 .346.281.628.628.628h7.534Zm-.627-1.256h-6.28V5.302a1.048 1.048 0 0 1 1.047-1.046h4.186a1.048 1.048 0 0 1 1.046 1.046V6.35Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M19.023 6.349H5.628a.628.628 0 0 0 0 1.256h13.395a.628.628 0 0 0 0-1.256ZM9.604 10.744v5.86a.628.628 0 0 0 1.256 0v-5.86a.628.628 0 0 0-1.256 0ZM13.791 10.744v5.86a.628.628 0 0 0 1.256 0v-5.86a.628.628 0 0 0-1.256 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
