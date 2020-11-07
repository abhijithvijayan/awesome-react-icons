import * as React from 'react';

import {IconProps} from '../types';

const CornerRightDown: React.FC<IconProps> = ({
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
        className="corner-right-down_svg__feather corner-right-down_svg__feather-corner-right-down"
        {...rest}
      >
        <path d="M10 15l5 5 5-5" />
        <path d="M4 4h7a4 4 0 014 4v12" />
      </svg>
    </>
  );
};

export default React.memo(CornerRightDown);
