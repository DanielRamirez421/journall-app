import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { routerConstants } from "./routerConstants";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route 
            path={routerConstants.auth} 
            component={AuthRouter}
          ></Route>
          <Route
            path={routerConstants.root}
            component={JournalScreen}
            exact
          ></Route>
          <Redirect 
            to={`${routerConstants.auth}${routerConstants.login}`} 
          />
          
        </Switch>
      </div>
    </Router>
  );
};
