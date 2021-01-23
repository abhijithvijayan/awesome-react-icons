import * as React from 'react';

import {IconProps} from '../types';

const Eye: React.FC<IconProps> = ({
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
        className="eye_svg__feather eye_svg__feather-eye"
        {...rest}
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx={12} cy={12} r={3} />
      </svg>
    </>
  );
};
export default React.memo(Eye);
