import React from "react";
interface CloseIconProps {
  onClick: () => void;
}
const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 61">
        <rect
          id="Rectangle 789"
          width="31.9462"
          height="1.99668"
          rx="0.998342"
          transform="matrix(0.707358 -0.706856 0.703703 0.710494 0 22.5811)"
          fill="white"
        />
        <rect
          id="Rectangle 790"
          width="31.9462"
          height="1.99668"
          rx="0.998342"
          transform="matrix(-0.707358 -0.706856 -0.703703 0.710494 25 22.5811)"
          fill="white"
        />
      </g>
    </svg>
  );
};
export default CloseIcon;
