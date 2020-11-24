import * as React from 'react';

import {IconProps} from '../types';

const MapPin: React.FC<IconProps> = ({
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
        className="map-pin_svg__feather map-pin_svg__feather-map-pin"
        {...rest}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    </>
  );
};

export default React.memo(MapPin);
