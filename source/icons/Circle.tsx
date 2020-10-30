import React from 'react';

import {IconProps} from '../types';

const Circle: React.FC<IconProps> = ({
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
        className="circle_svg__feather circle_svg__feather-circle"
        {...rest}
      >
        <circle cx={12} cy={12} r={10} />
      </svg>
    </>
  );
};
export default React.memo(Circle);
