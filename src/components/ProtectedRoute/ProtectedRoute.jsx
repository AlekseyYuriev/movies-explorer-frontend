import React from "react";
import { Navigate } from "react-router";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
   return (
      props.loggedIn ? <Component {...props} /> : <Navigate to='/login' replace/>
   )
}

export default ProtectedRouteElement;