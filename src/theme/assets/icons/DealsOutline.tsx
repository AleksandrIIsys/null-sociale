import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ width = 32, height = 32, ...props }: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox={'0 0 32 32'}
    {...props}
  >
    <Path
      fill="#6F6F6F"
      fillRule="evenodd"
      d="m15.17 26.685 11.678-11.679a.333.333 0 0 0 .094-.283l-1.18-8.258a.333.333 0 0 0-.283-.283l-8.258-1.18a.333.333 0 0 0-.283.095L5.26 16.775a.333.333 0 0 0 0 .472l9.439 9.438c.13.13.34.13.471 0Zm2.287-23.333a2 2 0 0 0-1.697.566L4.08 15.597a2 2 0 0 0 0 2.828l9.438 9.438a2 2 0 0 0 2.829 0l11.678-11.678a2 2 0 0 0 .566-1.697l-1.18-8.259a2 2 0 0 0-1.697-1.697l-8.258-1.18Z"
      clipRule="evenodd"
    />
    <Path
      fill="#6F6F6F"
      fillRule="evenodd"
      d="M22.06 9.766a2.058 2.058 0 1 0-2.91 2.91 2.058 2.058 0 0 0 2.91-2.91Zm-4.09-1.178a3.725 3.725 0 1 1 5.268 5.267 3.725 3.725 0 0 1-5.267-5.267Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
