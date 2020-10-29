import React from 'react';

import {IconProps} from '../types';

const SmartPhone: React.FC<IconProps> = ({
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
        className="smartphone_svg__feather smartphone_svg__feather-smartphone"
        {...rest}
      >
        <rect x={5} y={2} width={14} height={size} rx={2} ry={2} />
        <path d="M12 18h.01" />
      </svg>
    </>
  );
};
export default React.memo(SmartPhone);
