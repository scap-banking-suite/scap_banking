import * as React from "react"
import { SVGProps } from "react"

export const ArrowD = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.26294 5.66895L7.97544 9.38145L11.6879 5.66895"
        stroke="#02050A"
        stroke-width="1.2375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};


export const ChevDropdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path fill="#33354D" d="m7.999 11.384 4.666-5.334H3.332l4.667 5.334Z" />
  </svg>
)

