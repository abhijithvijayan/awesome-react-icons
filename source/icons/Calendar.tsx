import React from 'react';

const Calendar: React.FC = (props) => {
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
        className="calendar_svg__feather calendar_svg__feather-calendar"
        {...props}
      >
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    </>
  );
};

export default React.memo(Calendar);
