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
      <circle cx="19.1219" cy="19.4666" r="18.5281" fill={bgColor} />
      <path
        d="M15.416 11.1301L24.6801 19.4678L15.416 27.8054"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
