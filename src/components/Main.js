import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'
import ReadingList from './ReadingList'

const Main = () => (
  <main>
    <Switch>
      <Route path='/' component={Search}/>
      <Route path='/readinglist' component={ReadingList}/>
    </Switch>
  </main>
)

export default Main
