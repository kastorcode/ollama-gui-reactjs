import React from 'react'

import { StyledColumnContainer, StyledRowContainer } from './style'

interface ContainerProps {
  children : React.ReactNode,
  style ?: React.CSSProperties
}


export function ColumnContainer ({ children, style } : ContainerProps) {
  return (
    <StyledColumnContainer style={style}>
      { children }
    </StyledColumnContainer>
  )
}


export function RowContainer ({ children } : ContainerProps) {
  return (
    <StyledRowContainer>
      { children }
    </StyledRowContainer>
  )
}