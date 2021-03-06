import * as React from 'react';

import {IconProps} from '../types';

const Lock: React.FC<IconProps> = ({
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
        className="lock_svg__feather lock_svg__feather-lock"
        {...rest}
      >
        <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    </>
  );
};
export default React.memo(Lock);
