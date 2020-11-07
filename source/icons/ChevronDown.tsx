import * as React from 'react';

import {IconProps} from '../types';

const ChevronDown: React.FC<IconProps> = ({
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
        className="chevron-down_svg__feather chevron-down_svg__feather-chevron-down"
        {...rest}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </>
  );
};

export default React.memo(ChevronDown);
