export default function Hamburger({
  width = "14",
  height = "24",
  color = "#D0D0D0",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L12 12L1 23" stroke={color} stroke-width="2" />
    </svg>
  );
}
