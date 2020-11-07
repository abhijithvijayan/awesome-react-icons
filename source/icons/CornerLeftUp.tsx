import * as React from 'react';

import {IconProps} from '../types';

const CornerLeftUp: React.FC<IconProps> = ({
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
        className="corner-left-up_svg__feather corner-left-up_svg__feather-corner-left-up"
        {...rest}
      >
        <path d="M14 9L9 4 4 9" />
        <path d="M20 20h-7a4 4 0 01-4-4V4" />
      </svg>
    </>
  );
};

export default React.memo(CornerLeftUp);
