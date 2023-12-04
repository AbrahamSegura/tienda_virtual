import { forwardRef } from "react"
const SvgComponent = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    ref={ref}
    {...props}
  >
    <path
      fill="none"
      stroke="#dc2626"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.266 11.908a1.773 1.773 0 0 1-2.527 0L1.49 7.7c-2.84-2.842.87-9.12 5.511-4.478 4.634-4.633 8.344 1.644 5.511 4.478l-4.247 4.208Z"
    />
  </svg>
)
export const HeartIcon = forwardRef(SvgComponent)

