import { Dispatch, SetStateAction, createContext } from 'react'

interface ContextType {
  isHover: boolean
  setIsHover: Dispatch<SetStateAction<boolean>>
}

export const MarqueeContext = createContext<ContextType>({
  isHover: false,
  setIsHover: () => {},
})
