import * as React from 'react';

import {IconProps} from '../types';

const ArrowRight: React.FC<IconProps> = ({
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
        className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
        {...rest}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </>
  );
};

export default React.memo(ArrowRight);
