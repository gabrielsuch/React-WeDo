import {Routes as RoutesList} from "react-router-dom"
import {Route} from "./route"

import {Dashboard} from "../pages/dashboard"
import {Groups} from "../pages/groups"
import {Login} from "../pages/login"
import {Signup} from "../pages/signup"
import {Group} from "../pages/group"

export const Routes = () => {
    return (
        <RoutesList>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/group/:id" component={Group} isPrivate />
            <Route path="/groups" component={Groups} isPrivate />
        </RoutesList>
    )
}
