import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {userLoggedIn} from '../../redux/actions/login'
import styles from './Login.module.css'
import { Redirect } from 'react-router-dom'
import { postData } from '../../utils/helpers'
import Input from '../Input'
import LoginButton from '../LoginButton'
import LoginForm from '../LoginForm'
import LoginErrorBar from '../LoginForm/LoginErrorBar'


const Login = () => {

    const dispatch = useDispatch

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const isUserLoggedIn = useSelector((s)=>s.login.isUserLoggedIn)
    const [isLoading, setLoading] = useState(false)
    const [isErred, setErred] = useState(false)

 
    async function handleSubmitLogin (e) {

      e.preventDefault()

        setErred(false)
        setLoading(true)

        const data = await postData('http://localhost:5000/auth/login',{
          email, password
        })

        setLoading(false)

       if(data.error){
           setErred(true)
       }

       if(data.token){
        dispatch(userLoggedIn(email))
       }
       
    }

    if(isUserLoggedIn) {
        return <Redirect to = '/' />
    
      }

    return (    
      <div className={styles.loginWrapper}> 
      {isErred && <LoginErrorBar/>}
   
      <LoginForm handleSubmit={handleSubmitLogin}> 
      <Input 
           label="Email"
           type="email"
           value={email}
           handleChange={(e)=>setEmail(e.target.value)} 
           />    
    <Input
    label ="Password"
    type="password"
    value={password}
    handleChange={(e)=>setPassword(e.target.value)} />

    <LoginButton
    disabled={isLoading || email === '' || password === ''}>
      Login
     </LoginButton>       
        </LoginForm>        
        </div>     
    )
}
export default Login 