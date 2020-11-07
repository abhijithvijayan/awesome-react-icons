import * as React from 'react';

import {IconProps} from '../types';

const Activity: React.FC<IconProps> = ({
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
        className="activity_svg__feather activity_svg__feather-activity"
        {...rest}
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    </>
  );
};
export default React.memo(Activity);
