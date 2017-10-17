import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'

const Main = () => (
  <main>
    <Switch>
      <Route path='/' component={Search}/>
    </Switch>
  </main>
)

export default Main
