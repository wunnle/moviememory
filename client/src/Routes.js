import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Collection from './components/Collection'
import SearchBar from './components/JustWatched/SearchBar'

const Routes = () => (
    <BrowserRouter>
<Switch>
<Route path ="/mycollection" exact>
<Collection/>
</Route>
<Route path ="/search" exact>
    <SearchBar/>
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