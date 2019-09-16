import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth0} from '../react-auth0-wrapper';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { isAuthenticated } = useAuth0();

    return  isAuthenticated ? <Route {...rest} render={props => <Component {...props} /> } /> : <Redirect to="/login" /> ;

    //if user is authenticated render the component
    // otherwise redirect them
}

export default PrivateRoute;