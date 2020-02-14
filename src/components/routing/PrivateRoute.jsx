import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth0} from "../auth0/Auth0Wrapper";

function PrivateRoute({renderComponent: {component: Component, ...rest}}) {
    const {isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        return <Route {...rest} render={props => <Component {...props} />}/>
    }
    return <Redirect to='/'/>
}

export default PrivateRoute;
