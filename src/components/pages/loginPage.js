import React,{useState,useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { makeStyles, withStyles} from '@material-ui/core/styles';
import LoginButton from '../loginButton'; 


// import React from "react";

// const LoginButton = () => {

// };

// export default LoginButton;


export default function Login(props){

  // const classes = useStyles();

  const { user, isAuthenticated, loginWithRedirect} = useAuth0();

  useEffect(() => {
    console.log(isAuthenticated);
    // loginWithRedirect();
  },[])

  return(
    <div style={{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, rgba(16, 231, 220,1) , rgba(27, 156, 229,1))"}}>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>

  )
}