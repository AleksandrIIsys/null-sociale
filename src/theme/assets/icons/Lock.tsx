import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M14.75 10V7a2.75 2.75 0 1 0-5.5 0v3h5.5ZM8 7v3H6.5A1.5 1.5 0 0 0 5 11.5v8A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5H16V7a4 4 0 0 0-8 0Zm-1.5 4.25h11a.25.25 0 0 1 .25.25v8a.25.25 0 0 1-.25.25h-11a.25.25 0 0 1-.25-.25v-8a.25.25 0 0 1 .25-.25ZM12.15 13a.75.75 0 0 0-.75.75V18h1.25v-5h-.5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default SvgComponent;
