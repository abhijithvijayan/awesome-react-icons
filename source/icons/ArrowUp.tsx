import * as React from 'react';

import {IconProps} from '../types';

const ArrowUp: React.FC<IconProps> = ({
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
        className="arrow-up_svg__feather arrow-up_svg__feather-arrow-up"
        {...rest}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </>
  );
};

export default React.memo(ArrowUp);
