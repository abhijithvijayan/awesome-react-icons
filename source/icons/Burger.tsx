import React from 'react';

const Burger: React.FC = (props) => {
  return (
    <>
      <svg
        height={20}
        width={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4 6H20M4 12H20M4 18H11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default React.memo(Burger);
