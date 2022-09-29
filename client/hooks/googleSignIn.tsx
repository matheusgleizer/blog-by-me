import { useEffect } from 'react';
import AWS from 'aws-sdk';

AWS.config.region = 'eu-central-1';

const GoogleSignIn = () => {
  useEffect(() => {
    const scriptGoogle = document.createElement('script');
    const scriptAWS = document.createElement('script');

    scriptGoogle.src = 'https://accounts.google.com/gsi/client';
    scriptGoogle.async = true;

    scriptAWS.src = 'https://sdk.amazonaws.com/js/aws-sdk-2.953.0.min.js';

    document.body.appendChild(scriptGoogle);

    window.handleCredentialResponse = (data: any) => {
      console.log(data);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id='g_id_onload'
        data-client_id='227682946707-r26ab2qpn8bb44apkq4k88lg8i66lv7a.apps.googleusercontent.com'
        data-login_uri='http://localhost:5050/login/google'
        data-callback='handleCredentialResponse'
        data-auto_prompt='false'
      ></div>
      <div
        className='g_id_signin'
        data-type='standard'
        data-size='large'
        data-theme='outline'
        data-text='sign_in_with'
        data-shape='rectangular'
        data-logo_alignment='left'
      ></div>
    </div>
  );
};

export default GoogleSignIn;
