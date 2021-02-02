import React from 'react'

import Header from './components/Header/index'
import Landing from './pages/Landing/index'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <GlobalStyle />
    </>
  )
}

export default App
