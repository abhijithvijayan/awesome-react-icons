import * as React from 'react';

import {IconProps} from '../types';

const CornerLeftDown: React.FC<IconProps> = ({
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
        className="corner-left-down_svg__feather corner-left-down_svg__feather-corner-left-down"
        {...rest}
      >
        <path d="M14 15l-5 5-5-5" />
        <path d="M20 4h-7a4 4 0 00-4 4v12" />
      </svg>
    </>
  );
};

export default React.memo(CornerLeftDown);
