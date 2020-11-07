import * as React from 'react';

import {IconProps} from '../types';

const Plus: React.FC<IconProps> = ({
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
        className="plus_svg__feather plus_svg__feather-plus"
        {...rest}
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </>
  );
};
export default React.memo(Plus);
