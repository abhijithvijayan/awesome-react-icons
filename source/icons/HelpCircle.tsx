import * as React from 'react';

import {IconProps} from '../types';

const HelpCircle: React.FC<IconProps> = ({
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
        className="help-circle_svg__feather help-circle_svg__feather-help-circle"
        {...rest}
      >
        <circle cx={12} cy={12} r={10} />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    </>
  );
};
export default React.memo(HelpCircle);
