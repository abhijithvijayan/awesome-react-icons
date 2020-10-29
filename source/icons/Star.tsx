import React from 'react';

const Burger: React.FC = (props) => {
  return (
    <>
      <svg
        width={20}
        height={20}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="star_svg__feather star_svg__feather-star"
        {...props}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </>
  );
};

export default React.memo(Burger);
