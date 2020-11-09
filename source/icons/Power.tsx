import * as React from 'react';

import {IconProps} from '../types';

const Power: React.FC<IconProps> = ({
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
        className="power_svg__feather power_svg__feather-power"
        {...rest}
      >
        <path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10" />
      </svg>
    </>
  );
};

export default React.memo(Power);
