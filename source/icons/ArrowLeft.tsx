import React from 'react';

import {IconProps} from '../types';

const ArrowLeft: React.FC<IconProps> = ({
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
        className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
        {...rest}
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </>
  );
};
export default React.memo(ArrowLeft);
