export default function Hamburger({
  width = "38",
  height = "38",
  bgColor = "#949494",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18.9953"
        cy="19.467"
        r="18.5281"
        transform="rotate(-180 18.9953 19.467)"
        fill={bgColor}
      />
      <path
        d="M22.7012 27.8037L13.4371 19.4661L22.7012 11.1284"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
