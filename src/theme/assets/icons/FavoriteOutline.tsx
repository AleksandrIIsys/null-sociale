import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from 'types/components/icon';
const SvgComponent = ({
  width = 56,
  height = 56,
  color = '#292929',
  style = {},
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 56 56'}
    style={style}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="m28 9.291-5.306 10.852a3.25 3.25 0 0 1-2.448 1.788L8.337 23.678l8.637 8.499a3.25 3.25 0 0 1 .925 2.86L15.865 47.01l10.612-5.631a3.25 3.25 0 0 1 3.046 0l10.612 5.631-2.034-11.972a3.25 3.25 0 0 1 .925-2.861l8.637-8.499-11.91-1.747a3.25 3.25 0 0 1-2.447-1.788L28 9.291Zm1.572-2.476c-.64-1.308-2.504-1.308-3.144 0l-5.98 12.23a.75.75 0 0 1-.565.413L6.482 21.424c-1.43.21-2.004 1.965-.973 2.978l9.712 9.557a.75.75 0 0 1 .213.66l-2.29 13.475c-.242 1.432 1.264 2.52 2.546 1.839l11.958-6.346a.75.75 0 0 1 .704 0l11.957 6.346c1.283.68 2.79-.407 2.546-1.84l-2.29-13.474a.75.75 0 0 1 .214-.66l9.712-9.557c1.03-1.014.457-2.769-.973-2.979l-13.401-1.965a.75.75 0 0 1-.565-.413l-5.98-12.23Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
