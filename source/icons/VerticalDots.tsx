import React from 'react';

import {IconProps} from '../types';

const VerticalDots: React.FC<IconProps> = ({
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
        className="more-vertical_svg__feather more-vertical_svg__feather-more-vertical"
        {...rest}
      >
        <circle cx={12} cy={12} r={1} />
        <circle cx={12} cy={5} r={1} />
        <circle cx={12} cy={19} r={1} />
      </svg>
    </>
  );
};
export default React.memo(VerticalDots);
