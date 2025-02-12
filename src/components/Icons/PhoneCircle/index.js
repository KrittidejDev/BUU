export default function Hamburger({
  width = "43",
  height = "43",
  linearColor1 = "#38B4E7",
  linearColor2 = "#75C7E9",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_436_29)">
        <path
          d="M21.5 0C9.62587 0 0 9.62587 0 21.5C0 33.3741 9.62587 43 21.5 43C33.3741 43 43 33.3741 43 21.5C43 9.62587 33.3741 0 21.5 0ZM13.7734 8.54016C14.2164 8.51404 14.6168 8.77881 14.9204 9.24876L17.8598 14.8232C18.1693 15.4838 17.9934 16.191 17.5317 16.663L16.1854 18.0094C16.1023 18.1232 16.0476 18.2515 16.0463 18.3925C16.5626 20.3911 18.1288 22.2347 19.5107 23.5025C20.8925 24.7703 22.3777 26.4867 24.3056 26.8933C24.5439 26.9598 24.8358 26.9836 25.0064 26.8252L26.5706 25.2321C27.1105 24.8228 27.8916 24.6245 28.4681 24.9591H28.4943L33.7984 28.0902C34.577 28.5782 34.6576 29.5215 34.1002 30.0953L30.447 33.7197C29.9075 34.273 29.1907 34.459 28.4944 34.4598C25.4146 34.3676 22.5046 32.856 20.1143 31.3026C16.1909 28.4483 12.5921 24.9083 10.3327 20.6313C9.4662 18.8378 8.44828 16.5495 8.54543 14.5477C8.5541 13.7947 8.75784 13.0569 9.28818 12.5715L12.9415 8.91816C13.2261 8.676 13.5076 8.55585 13.7734 8.54016Z"
          fill="url(#paint0_linear_436_29)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_436_29"
          x1="21.5"
          y1="0"
          x2="21.5"
          y2="43"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={linearColor1} />
          <stop offset="0.58" stop-color={linearColor2} />
        </linearGradient>
        <clipPath id="clip0_436_29">
          <rect width="43" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
