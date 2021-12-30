import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import '../assets/style/main.scss'

export const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:title" component={Login} />
      </Switch>
    </BrowserRouter>
  </div>
)
