import * as React from 'react';

import {IconProps} from '../types';

const EditPencilSimple: React.FC<IconProps> = ({
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
        className="edit-2_svg__feather edit-2_svg__feather-edit-2"
        {...rest}
      >
        <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    </>
  );
};
export default React.memo(EditPencilSimple);
