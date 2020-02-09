import React from 'react';
import {Route, Switch} from 'react-router-dom';
import RouteWithSubRoutes from "./RouteWithSubRoutes";

function RenderRoutes({routes}) {
    return (
        <Switch>
            {routes.map((route) => {
                return <RouteWithSubRoutes key={route.key} {...route}/>
            })}
            <Route component={() => <h1>Page Not Found</h1>}/>
        </Switch>
    )
}

export default RenderRoutes;
