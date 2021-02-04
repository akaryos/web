import React, { InputHTMLAttributes, useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import { Container } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [registerField, fieldName])

  return (
    <Container isErrored={!!error}>
      <label>
        {name}
        {error &&
          <span>{` - ${error}`}</span>
        }
      </label>
      <input defaultValue={defaultValue} ref={inputRef} {...rest}/>
    </Container>
  )
}

export default Input
