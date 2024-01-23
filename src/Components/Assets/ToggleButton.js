import React from "react";

const ToggleButton = ({ handleToggle }) => {
  return (
    <button className="border border-gray w-[50px] h-9 rounded-lg bg-white flex justify-center items-center">
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 9H14"
          stroke="#2F9089"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 4.5V13.5"
          stroke="#2F9089"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
