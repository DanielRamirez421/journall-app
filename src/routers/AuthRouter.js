import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { routerConstants } from './routerConstants'

export const AuthRouter = () => {
  return (
    <Switch>

      <Route 
        path={ `${routerConstants.auth}${routerConstants.login}` }
        component={ LoginScreen }  
        exact
      ></Route>
      <Route
        path={ `${routerConstants.auth}${routerConstants.register}` } 
        component={ RegisterScreen }
        exact
      ></Route>
      <Redirect 
        to={ `${routerConstants.auth}${routerConstants.login}`} 
      />

    </Switch>
  )
}
