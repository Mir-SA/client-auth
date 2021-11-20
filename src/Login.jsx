import React from 'react';
import AuthAPI from './AuthAPI'
import Cookies from 'js-cookie'

const Login = () => {
  const Auth = React.useContext(AuthAPI)

  const handleLogin = () =>  {
    Auth.setAuth(true)
    Cookies.set('user', 'loginTrue')  
  }
  
  return (
    <div>
      <form>
        <h1>Client Auth</h1>

        <label htmlFor ='email'>Email </label>
        <input type='email' placeholder='Username' id='email'/>
        
        <label htmlFor ='password'>Password </label>
        <input type='password' placeholder='Password' id ='password'/>  

        <button className="btn" type='submit' onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
}

export default Login;