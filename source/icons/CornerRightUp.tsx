import * as React from 'react';

import {IconProps} from '../types';

const CornerRightUp: React.FC<IconProps> = ({
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
        className="corner-right-up_svg__feather corner-right-up_svg__feather-corner-right-up"
        {...rest}
      >
        <path d="M10 9l5-5 5 5" />
        <path d="M4 20h7a4 4 0 004-4V4" />
      </svg>
    </>
  );
};

export default React.memo(CornerRightUp);
