export default function Hamburger({
  width = "38",
  height = "38",
  color = "#38B4E7",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.7433 11.1056C32.3917 10.3709 31.8964 9.71406 31.2867 9.17396L26.5367 4.86729C25.4912 3.90898 24.1637 3.31466 22.7525 3.17312H12.9992C11.9503 3.12865 10.9031 3.29322 9.9184 3.65728C8.93374 4.02133 8.03132 4.57759 7.26366 5.29368C6.49599 6.00978 5.87842 6.8714 5.44688 7.82841C5.01534 8.78542 4.77845 9.8187 4.75 10.8681V27.1765C4.80601 28.759 5.33535 30.2884 6.26961 31.567C7.20387 32.8457 8.50011 33.8147 9.99083 34.349C10.9605 34.7155 11.9956 34.8773 13.0308 34.824H25.0008C26.0497 34.8684 27.0969 34.7039 28.0816 34.3398C29.0663 33.9757 29.9687 33.4195 30.7363 32.7034C31.504 31.9873 32.1216 31.1257 32.5531 30.1687C32.9847 29.2117 33.2215 28.1784 33.25 27.129V13.5598C33.2576 12.715 33.0849 11.8783 32.7433 11.1056ZM25.08 23.899L20.8683 28.1265C20.6261 28.3626 20.3414 28.5506 20.0292 28.6806C19.8186 28.7756 19.5937 28.8342 19.3642 28.8548C19.1557 28.9023 18.9393 28.9023 18.7308 28.8548C18.501 28.8342 18.2762 28.7753 18.0658 28.6806C17.7536 28.5506 17.4689 28.3626 17.2267 28.1265L13.015 23.899C12.7556 23.5961 12.6201 23.2064 12.6355 22.808C12.6508 22.4095 12.816 22.0315 13.098 21.7495C13.38 21.4675 13.758 21.3023 14.1565 21.2869C14.555 21.2715 14.9446 21.4071 15.2475 21.6665L17.4642 23.8831V16.584C17.4642 16.164 17.631 15.7613 17.9279 15.4644C18.2248 15.1674 18.6276 15.0006 19.0475 15.0006C19.4674 15.0006 19.8702 15.1674 20.1671 15.4644C20.464 15.7613 20.6308 16.164 20.6308 16.584V23.8831L22.8475 21.6665C23.1504 21.4071 23.54 21.2715 23.9385 21.2869C24.337 21.3023 24.715 21.4675 24.997 21.7495C25.279 22.0315 25.4442 22.4095 25.4595 22.808C25.4749 23.2064 25.3394 23.5961 25.08 23.899ZM25.4283 11.7231C25.2024 11.7252 24.9784 11.6825 24.7691 11.5975C24.5598 11.5125 24.3694 11.3869 24.2089 11.2279C24.0485 11.0689 23.9211 10.8797 23.8342 10.6712C23.7472 10.4627 23.7025 10.239 23.7025 10.0131V5.81729C24.1458 6.05796 24.5749 6.32712 24.985 6.62479L29.735 10.9473C29.9978 11.169 30.2211 11.4302 30.4 11.7231H25.4283Z"
        fill={color}
      />
    </svg>
  );
}
