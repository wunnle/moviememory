import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'

const Routes = () => (
    <BrowserRouter>
    <div>
        <Link to = '/'> Home</Link>
        <Link to = '/login'>Login</Link> 
        <Link to = '/signup'>Signup</Link>
    </div>

<Switch>

<Route path ="/" exact>
  <Home/>
</Route>

<Route path ="/login">
    <Login/>
</Route>
<Route path ="/signup"> 
<Signup/>
</Route>

</Switch> 

    </BrowserRouter>
)






export default Routes