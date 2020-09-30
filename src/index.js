import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'; 

const loginContainer = (

    <div className="login-container">

        <h1 className="login-title"> Moon-Lite </h1>

        <h2 className="sub-title"> Optimized Sleep Tracking </h2>

        <label for="username" className="username"> Username </label>

        <input type="text" id="uNameText" className="textfield1" placeholder="Input Username Here" />

        <label for="password" className="password" placeholder="Password" > Password </label>

        <input type="text" id="pswdText" className="textfield2" placeholder="Input Password Here" />

        <button id="btn" className="sign-in-container sign-in-text">Sign In </button>
    </div>
);



ReactDOM.render(
    loginContainer,
    document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();