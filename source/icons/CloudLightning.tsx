import React from 'react';

import {IconProps} from '../types';

const CloudLightning: React.FC<IconProps> = ({
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
        className="cloud-lightning_svg__feather cloud-lightning_svg__feather-cloud-lightning"
        {...rest}
      >
        <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
        <path d="M13 11l-4 6h6l-4 6" />
      </svg>
    </>
  );
};
export default React.memo(CloudLightning);
