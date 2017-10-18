import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ResultList from './ResultList'
import Book from './Book'

const Results = () => (
  <Switch>
    <Route exact path='/results' component={ResultList}/>
    <Route path='/results/:id' component={Book}/>
  </Switch>
)


export default Results