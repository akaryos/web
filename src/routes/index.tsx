import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import LogIn from '../pages/LogIn'
import NotFound from '../pages/NotFound'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" exact component={LogIn} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
