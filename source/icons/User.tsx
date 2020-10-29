import React from 'react';

import {IconProps} from '../types';

const User: React.FC<IconProps> = ({
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
        className="user_svg__feather user_svg__feather-user"
        {...rest}
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    </>
  );
};
export default React.memo(User);
