/* eslint-disable jsx-a11y/label-has-associated-control */
import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import loginBG from '../../../images/loginBG.png';
import firebaseConfig from './firebase.config';

const Login = () => {
    const [setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const storeAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                storeAuthToken();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">
                            Forgot your password?
                        </label>
                    </div>
                    <div className="from-group mt-5">
                        <Button className="btn btn-brand" onClick={handleGoogleSignIn}>
                            Google Sign in
                        </Button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={loginBG} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
