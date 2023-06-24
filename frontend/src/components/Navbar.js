import React, { useCallback, useState } from 'react';

import {
    LoginSocialGoogle,
    IResolveParams,
  } from 'reactjs-social-login';



const Navbar = () => {
    const [provider, setProvider] = useState('');
    const [profile, setProfile] = useState();

    const onLoginStart = useCallback(() => {
        alert('login start');
    }, []);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider('');
        alert('logout success');
    }, []);
    const REDIRECT_URI = 'http://localhost:3000';

    const onLogout = useCallback(() => {}, []);
    return (
        <div>
            <LoginSocialGoogle
                client_id={process.env.REACT_APP_GG_APP_ID || ''}
                onLoginStart={onLoginStart}
                redirect_uri={REDIRECT_URI}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    console.log(data);
                }}
                onReject={err => {
                    console.log(err);
                }}
                >
                    <button>Google</button>
                </LoginSocialGoogle>
        </div>
    )
}
export default Navbar;