import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import AuthAPI from './AuthAPI'
import Cookies from 'js-cookie'
import './App.css';
import Login from './Login'
import Profile from './Profile'

function App() {
  const [auth, setAuth] = useState(false)
  const readCookie = () => {
    const user = Cookies.get('user')
    if(user) setAuth(true)
  }

  useEffect(() => {
    readCookie()
  }, [])

  return (
    <AuthAPI.Provider value={{auth, setAuth}}>
      <Router>
        <Paths />
      </Router>
    </AuthAPI.Provider>
  );
}

const Paths = () => {
  const Auth = React.useContext(AuthAPI)
  return (
    <Switch path="/" element={<App />}>
      <ProtectedLogin path="/login" auth={Auth.auth} component={Login} />
      <ProtectedRoute path="/profile" auth={Auth.auth} component={Profile} />
    </Switch>
  );
};

const ProtectedRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route 
      {...rest}
      render={() => auth ? ( <Component />) : (<Redirect to='/login'/>)}    
    />
  )
}

const ProtectedLogin = ({auth, component: Component, ...rest}) => {
  return(
    <Route 
      {...rest}
      render={() => !auth ? ( <Component />) : (<Redirect to='/profile'/>)}    
    />
  )
}

export default App;