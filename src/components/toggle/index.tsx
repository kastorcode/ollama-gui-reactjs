import React from 'react'

import { Ball, Checkbox, Container, Label, ToggleContainer } from './style'

interface ToggleProps {
  checked : boolean
  id : string
  label : string
  onChange : () => any
}


export default function Toggle ({ checked, id, label, onChange } : ToggleProps) {
  return (
    <Container>
      <span>{ label }</span>
      <ToggleContainer>
        <Checkbox
          id={id}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <Label htmlFor={id} checked={checked}>
          <Ball checked={checked} />
        </Label>
      </ToggleContainer>
    </Container>
  )
}