import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext'

const PrivateRoute = ({component: RouteComponent, ...rest}) =>{
    const {user} = useContext(AuthContext);
    return(
        <Route  {...rest} render={(routeProps) =>
            !user ? <Redirect to={'/ReactEcommerceLogin'}/> : <RouteComponent {...routeProps} />
        } />
    ) 
}

export default PrivateRoute 