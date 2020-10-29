import React from 'react';

import {IconProps} from '../types';

const Coffee: React.FC<IconProps> = ({
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
        className="coffee_svg__feather coffee_svg__feather-coffee"
        {...rest}
      >
        <path
          d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V
8zM6 1v3M10 1v3M14 1v3"
        />
      </svg>
    </>
  );
};

export default React.memo(Coffee);
