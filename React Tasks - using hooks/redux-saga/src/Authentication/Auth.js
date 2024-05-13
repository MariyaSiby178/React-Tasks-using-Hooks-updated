import React from "react";
import { UseAuth } from "./UseAuth";
import {Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const { authData } = UseAuth();
  console.log("Context",authData)
  if(!authData){
    return <Navigate to={"/login"}/>
  }
  if(authData?.role==="Admin"){
    return <Outlet/>
  }
  if(authData?.role){
    return<Navigate to={"/unauthorized"}/>
  }
  return <div>Auth</div>;
};

export default Auth;