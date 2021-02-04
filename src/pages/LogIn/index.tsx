import React, { useRef, useCallback } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container } from './style'

interface Data {
  username: string
  password: string
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: Data) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
      })

      await schema.validate(data, { abortEarly: false })
    } catch (error) {
      if (!data.username && !data.password) {
        formRef.current?.setErrors({
          username: 'This field required',
          password: 'This field required'
        })
      } else if (!data.username) {
        formRef.current?.setErrors({ username: 'This field required' })
      } else if (!data.password) {
        formRef.current?.setErrors({ password: 'This field required' })
      }
    }
  }, [])

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <Input name="username" type="text"/>
        <Input name="password" type="password"/>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  )
}

export default LogIn
