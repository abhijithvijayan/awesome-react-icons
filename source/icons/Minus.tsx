import React from 'react';

import {IconProps} from '../types';

const Minus: React.FC<IconProps> = ({
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
        className="minus_svg__feather minus_svg__feather-minus"
        {...rest}
      >
        <path d="M5 12h14" />
      </svg>
    </>
  );
};
export default React.memo(Minus);
