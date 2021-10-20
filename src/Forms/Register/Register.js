import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import Header from '../../Components/Shared/Header/Header';
import useAuth from '../../Hooks/useAuth';
import './Register.css'
const Register = () => {
    const history = useHistory()
    const {createEmailPass,setuserName,setName, setUsers, signinWithGoogle, users} = useAuth()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    //email
    const signWithEmail = (e) =>{
        setEmail(e.target.value)
    }
    //pass
    const signWithPass = (e) =>{
        setPass(e.target.value)
    }
    const handleSubmit = (e) =>{
        createEmailPass(email, pass)
        .then((result) => {
            setuserName(users)
            setUsers(result.user)
           })
           history.push('/home')
    }
    //google submit
    const handleSigninWithGoogle = () =>{
        signinWithGoogle()
        .then( result => {
            history.push('/home')
          });
    }
    const updateName=(e)=>{
        setName(e.target.value)
    }
    return (
        <div>
            <Header></Header>
            <div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    <form onSubmit={handleSubmit}>
    <input onBlur={updateName} type="text" name="name" placeholder="Name" />
    <input onBlur={signWithEmail} type="text" name="email" placeholder="E-mail" />
    <input onBlur={signWithPass} type="password" name="password" placeholder="Password" />
    
    <input type="submit" name="signup_submit" value="Sign up" />
    </form>
    <div className="mt-1">
    <button onClick={handleSigninWithGoogle} class="social-signin google">Sign up with Google+</button>
    </div>
    <div className="login-margin">
        <Link to="/login">
        <p>Already have an account?</p>
        </Link>
    </div>
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Register;