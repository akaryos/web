import React from 'react'

// import Button from '../../components/Button/index'

import { Container } from './style'

const LogIn: React.FC = () => (
  <Container>
    <form action="">
      <h1>Log In</h1>

      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button>Log In</button>
    </form>
  </Container>
)

export default LogIn
