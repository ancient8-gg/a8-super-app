import { CountdownRenderProps } from 'react-countdown'

export default function RewardCountdown({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) {
  if (completed) {
    return <>Completed</>
  }

  return (
    <span>
      {days}D - {hours}H : {minutes}M : {seconds}S
    </span>
  )
}
