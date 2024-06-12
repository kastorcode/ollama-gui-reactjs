import React, { forwardRef } from 'react'

import useIsMobile from '~/hooks/useIsMobile'
import { StyledColumnContainer, StyledRowContainer } from './style'

interface ContainerProps {
  children : React.ReactNode,
  style ?: React.CSSProperties
}

export function ColumnContainer ({ children, style } : ContainerProps) {

  const isMobile = useIsMobile()

  return (
    <StyledColumnContainer isMobile={isMobile} style={style}>
      { children }
    </StyledColumnContainer>
  )

}

export const RowContainer = forwardRef<HTMLDivElement, ContainerProps>
(({ children, style } : ContainerProps, ref) => {

  const isMobile = useIsMobile()

  return (
    <StyledRowContainer isMobile={isMobile} ref={ref} style={style}>
      { children }
    </StyledRowContainer>
  )

})

interface FillerProps {
  children ?: React.ReactNode,
  height ?: string,
  width ?: string
}

export function Filler ({
  children, height='100%', width='100%'
} : FillerProps) {

  return (
    <div style={{ height, width }}>
      { children }
    </div>
  )

}