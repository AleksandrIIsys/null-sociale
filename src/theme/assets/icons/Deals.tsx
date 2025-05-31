import * as React from 'react';
import Svg from 'react-native-svg';
import { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 32,
  height = 32,
  color = 'none',
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
      fill="#FFBC0D"
      fillRule="evenodd"
      d="M17.457 3.352a2 2 0 0 0-1.697.566L4.08 15.597a2 2 0 0 0 0 2.828l9.438 9.438a2 2 0 0 0 2.829 0l11.678-11.678a2 2 0 0 0 .566-1.697l-1.18-8.259a2 2 0 0 0-1.697-1.697l-8.258-1.18Zm1.103 9.914a2.891 2.891 0 1 0 4.089-4.089 2.891 2.891 0 0 0-4.089 4.089Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
