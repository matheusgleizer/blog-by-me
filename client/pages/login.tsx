// import { useState, useEffect } from 'react';
// import GoogleLogin from 'react-google-login';
// import axios from 'axios';
// import { isEmpty } from 'lodash';
import GoogleSignIn from '../hooks/googleSignIn';

const responseGoogle = (response: any) => {
  console.log(response);
};

const Login = () => {
  return (
    <div>
      Login
      <GoogleSignIn />
    </div>
    // <GoogleLogin
    //   clientId="227682946707-r26ab2qpn8bb44apkq4k88lg8i66lv7a.apps.googleusercontent.com"
    //   buttonText='Login'
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={'single_host_origin'}
    //   accessType='online'
    // />
  );
};

export default Login;
