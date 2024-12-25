import clsx from 'clsx'
import { ArrowRight } from 'iconsax-react'

import { Button } from 'antd'

type NavigateButtonProps = {
  isPrev?: boolean
  active?: boolean
  onClick?: () => void
}

export default function NavigateButton({
  isPrev,
  active,
  onClick,
}: NavigateButtonProps) {
  return (
    <Button
      className="border border-default rounded-full w-10 h-10 p-0"
      disabled={!active}
      onClick={onClick}
    >
      <ArrowRight
        size="24"
        className={clsx(
          isPrev && 'rotate-180',
          active ? 'text-[#C4C6CD]' : 'text-[#383B45]',
        )}
      />
    </Button>
  )
}
