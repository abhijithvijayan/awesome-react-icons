import * as React from 'react';

import {IconProps} from '../types';

const Calendar: React.FC<IconProps> = ({
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
        className="calendar_svg__feather calendar_svg__feather-calendar"
        {...rest}
      >
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    </>
  );
};

export default React.memo(Calendar);
