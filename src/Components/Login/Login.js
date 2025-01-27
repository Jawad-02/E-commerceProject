import React, { useState } from 'react'
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { useNavigate, Link } from 'react-router-dom';
import logo from './images/amazonlogo.png';
import { auth } from './firebase';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success(`Wellcome Back ${email}`);
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const handleRegister = (e) => {
    navigate('/signup');

  };

  return (
    <>
      <div className='login'>
        <Link to='/' >
          <img className='login_logo'
            src={logo} alt="error" /> </Link>
        <div className='login_container'>
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type='text' placeholder='example@gmail.com' value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password' value={password}
              onChange={(p) => setPassword(p.target.value)}
            />
            <button type='submit' onClick={signIn}
              className='login__signInButton'>Sign In</button>
          </form>
          <p>
            By signing-in you agree to Terms & Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <h5 className="login__newToAmazon">New to Amazon ?</h5>
          <button type='submit' onClick={handleRegister}
            className='login__registerButton'>Create your Amazon Account</button>

        </div>


      </div>
    </>
  )
}
export default Login;
