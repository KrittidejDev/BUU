export default function Hamburger({ width = "69", height = "69" }) {
  return (
    <svg
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_85_520"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="69"
        height="69"
      >
        <path
          d="M34.5 66.5827C52.2196 66.5827 66.5833 52.219 66.5833 34.4993C66.5833 16.7797 52.2196 2.41602 34.5 2.41602C16.7803 2.41602 2.41663 16.7797 2.41663 34.4993C2.41663 52.219 16.7803 66.5827 34.5 66.5827Z"
          fill="white"
          stroke="white"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M48.9375 29.6875L34.5 44.125L20.0625 29.6875"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_85_520)">
        <path d="M-4 -4L73 -4L73 73L-4 73L-4 -4Z" fill="white" />
      </g>
    </svg>
  );
}
