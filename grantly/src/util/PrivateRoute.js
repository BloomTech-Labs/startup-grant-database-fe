import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return  isAuthenticated ? <Route {...rest} render={props => <Component {...props} /> } /> : <Redirect to="/grants" /> ;

    //if user is authenticated render the component
    // otherwise redirect them
}

export default PrivateRoute;