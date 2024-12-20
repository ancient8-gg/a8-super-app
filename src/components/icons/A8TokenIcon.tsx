import { BaseComponentProps } from '@/types'

export const A8TokenIcon = ({ size = 48, ...props }: BaseComponentProps) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z"
        fill="#D8FF76"
      />
      <path
        d="M35.3318 28.6782H12.0044V31.2371H35.3318V28.6782Z"
        fill="#182102"
      />
      <path
        d="M15.9498 34.8985L15.1939 36.9069H12L14.2385 31.2371L14.8648 31.639C15.9498 32.3337 16.3998 33.6926 15.9454 34.8941L15.9498 34.8985Z"
        fill="#182102"
      />
      <path
        d="M35.3318 36.9069H32.0126L31.2698 34.9699C30.7951 33.7319 31.2771 32.3338 32.4146 31.6551L33.1049 31.2415L35.3303 36.9113V36.9069H35.3318Z"
        fill="#182102"
      />
      <path
        d="M33.105 31.2384H29.8703L28.9018 28.6795L23.612 14.6643H23.5596L18.2874 28.678L17.3276 31.2369H14.2415L15.2493 28.678L20.9031 14.3585H23.4941L22.2299 11H25.1675L32.1015 28.678L33.1064 31.2369L33.105 31.2384Z"
        fill="#182102"
      />
    </svg>
  )
}
