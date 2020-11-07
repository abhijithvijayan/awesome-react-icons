import * as React from 'react';

import {IconProps} from '../types';

const Check: React.FC<IconProps> = ({
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
        className="check_svg__feather check_svg__feather-check"
        {...rest}
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </>
  );
};
export default React.memo(Check);
