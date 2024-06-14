import React, { forwardRef } from 'react'

import { Input } from './style'


interface InputProps {
  onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
  placeholder : string,
  value : string
}


export default forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      type='text'
    />
  )
})