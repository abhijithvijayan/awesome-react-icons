import React from 'react';

const ArrowLeft: React.FC = (props) => {
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
        className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
        {...props}
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </>
  );
};
export default React.memo(ArrowLeft);
