import React from 'react';

const SmartPhone: React.FC = (props) => {
  return (
    <>
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="smartphone_svg__feather smartphone_svg__feather-smartphone"
        {...props}
      >
        <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
        <path d="M12 18h.01" />
      </svg>
    </>
  );
};
export default React.memo(SmartPhone);
