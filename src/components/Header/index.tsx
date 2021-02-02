import React from 'react'

import { ReactComponent as AkaryosLogo } from '../../assets/svg/akaryos.svg'

import { Container, Right, Left } from './styles'

const Header: React.FC = () => (
  <Container>
    <Right>
      <a href="#">
        <AkaryosLogo />
      </a>
    </Right>
    <Left>
      <a href="#">Log In</a>
    </Left>
  </Container>
)

export default Header
