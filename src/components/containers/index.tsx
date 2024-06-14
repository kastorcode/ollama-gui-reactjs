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
  height ?: React.CSSProperties['height'],
  textAlign ?: React.CSSProperties['textAlign'],
  width ?: React.CSSProperties['width']
}

export function Filler ({
  children, height='100%', textAlign='center', width='100%'
} : FillerProps) {

  return (
    <div style={{ height, textAlign, width }}>
      { children }
    </div>
  )

}