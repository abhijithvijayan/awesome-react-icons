import * as React from 'react';

import {IconProps} from '../types';

const ShareOther: React.FC<IconProps> = ({
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
        className="share-2_svg__feather share-2_svg__feather-share-2"
        {...rest}
      >
        <circle cx={18} cy={5} r={3} />
        <circle cx={6} cy={12} r={3} />
        <circle cx={18} cy={19} r={3} />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    </>
  );
};
export default React.memo(ShareOther);
