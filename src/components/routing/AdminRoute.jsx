import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from "react-redux";

function AdminRoute({renderComponent: {component: Component, ...rest}}) {
    const {isModerator} = useSelector(state => state.admin);
    if (isModerator) {
        return <Route {...rest} render={props => <Component {...props} />}/>
    }
    return <Redirect to='/'/>
}

export default AdminRoute;
