export default function Hamburger({
  width = "28",
  height = "6",
  color = "#DDC9C9",
  acitve,
}) {
  return !acitve ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.9375 3H24.8125"
        stroke={color}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 3H25.125"
        stroke="#6F6868"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
