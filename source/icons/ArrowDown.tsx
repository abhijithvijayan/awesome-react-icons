import * as React from 'react';

import {IconProps} from '../types';

const ArrowDown: React.FC<IconProps> = ({
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
        className="arrow-down_svg__feather arrow-down_svg__feather-arrow-down"
        {...rest}
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </>
  );
};

export default React.memo(ArrowDown);
