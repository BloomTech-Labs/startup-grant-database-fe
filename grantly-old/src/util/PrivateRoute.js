import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Route, Redirect} from 'react-router-dom';
import {useAuth0} from '../react-auth0-wrapper';

const PrivateRoute = ({ component: Component, path, currentUser, ...rest }) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  
    useEffect(() => {
      if (loading || isAuthenticated) {
        return;
      }
      const fn = async () => {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      };
      fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);
  
    const render = props => isAuthenticated === true && props.currentUser[
      "https://founder-grants.com/appdata"
    ].authorization.roles.find(() => "Moderator") === "Moderator" ? <Component {...props} /> : <Redirect to="/grants" />;
  
    return <Route path={path} render={render} {...rest} />;
  };
  

// const PrivateRoute = ({component: Component, currentUser, ...rest}) => {
//     const { isAuthenticated } = useAuth0();

//     return  isAuthenticated  ? <Route {...rest} render={props => <Component {...props} /> } /> : <Redirect to="/login" /> ;

//     //if user is authenticated render the component
//     // otherwise redirect them
// }

const MapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(MapStateToProps, {})(PrivateRoute);