import { Switch } from "react-router";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Group } from "../pages/group"

import { Route } from "./route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/group" component={Group} isPrivate/>
    </Switch>
  );
};
