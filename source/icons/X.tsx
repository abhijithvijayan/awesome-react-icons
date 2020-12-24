import * as React from 'react';

import {IconProps} from '../types';

const X: React.FC<IconProps> = ({
  size = 20,
  stroke = 'currentColor',
  ...rest
}) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="x_svg__feather x_svg__feather-x"
        {...rest}
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </>
  );
};

export default React.memo(X);
