import {
  useRef,
  useState,
  useContext,
  useEffect,
  type PropsWithChildren,
} from 'react'
import Marquee from 'react-fast-marquee'

import { MarqueeContext } from './MarqueeContext'

import './index.scss'

type MarqueeComponentProps = {} & PropsWithChildren

function MarqueeComponent({ children }: MarqueeComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMove, setIsMove] = useState<boolean>(false)
  const { isHover } = useContext(MarqueeContext)

  useEffect(() => {
    const container = containerRef.current
    let total = 0
    container?.childNodes.forEach((element) => {
      if (element instanceof HTMLElement) {
        total += element.offsetWidth
      }
    })

    if (container && container.offsetWidth < total && isHover) {
      setIsMove(true)
    } else {
      setIsMove(false)
    }
  }, [isHover])

  return (
    <div
      ref={containerRef}
      className={`marquee-wrapper marquee-wrapper__${
        isMove ? `hovered` : 'not-hover'
      }`}
    >
      <Marquee play={true}>{children}</Marquee>
      <div className="marquee-container__not-hover">{children}</div>
    </div>
  )
}

export default MarqueeComponent
