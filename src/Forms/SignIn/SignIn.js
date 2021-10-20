import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import Header from '../../Components/Shared/Header/Header';
import useAuth from '../../Hooks/useAuth';
import './SignIn.css'
const SignIn = () => {
    const {loginEmailPass, signinWithGoogle,setUsers} = useAuth()
    const [email, setEmail] = useState();
    const [pass, setPass] = useState()
    //
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    //email
    const getEmail = (e) =>{
        setEmail(e.target.value)
    }
    //
    const googleHandle = () =>{
       signinWithGoogle()
       .then( result => {
        history.push(redirect_uri)
      });
    }
    //
    //pass
    const getpass = (e) =>{
        setPass(e.target.value)
    }
    const handleLogin = (e) =>{
        loginEmailPass(email, pass)
        .then((result) => {
            setUsers(result.user)
            history.push(redirect_uri)
          })
        e.preventDefault();
    }
    return (
        <div>
          <Header></Header>
            <div className="login-container">
            <div className="container">
  <section id="content">
<form onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <div>
        <input onBlur={getEmail} type="text" placeholder="Username" required="" id="username" />
        </div>
        <div>
        <input onBlur={getpass} type="password" placeholder="Password" required="" id="password" />
        </div>
        <div className="btn-padding">
        <input type="submit" value="Log in" />
        </div>
    </form>
    <div className="btn-pading">
    <button className="btn-sign" onClick={googleHandle}>Log in with Google+</button>
    </div>
    <Link to="/register">
    <p className="already-acnt">Create a new Account</p>
    </Link>
  </section>
</div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default SignIn;