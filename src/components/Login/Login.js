import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} =location.state || {from: {pathname: '/'}};
    console.log(loggedInUser)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const handleGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email ,photoURL } = result.user;
            const signedInUser = { name: displayName, email , img: photoURL}
            setLoggedInUser(signedInUser);
            storeAuthToken();
          }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

    return (
        <div className='container p-5'>
            <button className="btn  text-primary" onClick={handleGoogleLogin}>Google Sign in</button>
        </div>
    );
};

export default Login;