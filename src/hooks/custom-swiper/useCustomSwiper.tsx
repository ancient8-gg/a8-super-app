import { useCallback, useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'

import { MAX_WIDTH_CONTAINER } from '@/constants'

type CustomSwiper = {
  cardWidth: number
  totalSlide: number
  gap: number
}

export const useCustomSwiper = ({
  cardWidth,
  totalSlide,
  gap,
}: CustomSwiper) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { width: screenWidth } = useWindowSize()
  const [showNavigate, setShowNavigate] = useState(false)
  const [prevActive, setPrevActive] = useState(false)
  const [nextActive, setNextActive] = useState(false)

  const onNext = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
  }

  const onPrev = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  }

  const checkPrevAndNextState = useCallback(() => {
    if (!scrollRef.current) return
    const innerWidth = cardWidth * totalSlide - gap
    const visibleWidth = Math.min(screenWidth, MAX_WIDTH_CONTAINER)

    setShowNavigate(innerWidth > visibleWidth)
    setPrevActive(scrollRef.current.scrollLeft > 0)
    setNextActive(scrollRef.current.scrollLeft < innerWidth - visibleWidth)
  }, [screenWidth, totalSlide, gap, cardWidth])

  useEffect(() => {
    checkPrevAndNextState()
  }, [checkPrevAndNextState])

  return {
    checkPrevAndNextState,
    onNext,
    onPrev,
    showNavigate,
    prevActive,
    nextActive,
    scrollRef,
  }
}
