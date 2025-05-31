import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 40,
  height = 58,
  style = {},
  color = 'none',
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={color}
    viewBox={'0 0 40 58'}
    style={style}
  >
    <Path
      fill="#F1F1F1"
      fillRule="evenodd"
      d="M20 58c11.046 0 20-1.79 20-4s-8.954-4-20-4-20 1.79-20 4 8.954 4 20 4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D90007"
      fillRule="evenodd"
      d="M20 54c1.43 0 20-15 20-34.059C40 8.928 31.046 0 20 0S0 8.928 0 19.941C0 39 18.57 54 20 54Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M25.411 10.398c1.97 0 3.567 8.137 3.567 18.173h2.855C31.833 17.761 28.958 9 25.411 9c-2.017 0-3.818 2.634-4.994 6.752C19.24 11.633 17.44 9 15.422 9 11.876 9 9 17.762 9 28.571h2.855c0-10.036 1.598-18.173 3.567-18.173 1.97 0 3.567 7.51 3.567 16.775h2.855c0-9.264 1.597-16.775 3.567-16.775Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
