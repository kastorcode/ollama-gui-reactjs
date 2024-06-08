import React from 'react'

import { StyledButton } from './style'


interface ButtonProps {
  children : React.ReactNode,
  onClick ?: Function,
  style ?: React.CSSProperties
}


export default function Button ({ children, onClick, style } : ButtonProps) {
  return (
    <StyledButton
      onClick={() => onClick && onClick()}
      style={style}
    >
      { children }
    </StyledButton>
  )
}