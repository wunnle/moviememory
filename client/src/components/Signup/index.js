import React, { useState } from 'react'
import styles from './Signup.module.css'
import { postData } from '../../utils/helpers'
import { Redirect } from 'react-router-dom'



const Signup = () => {


const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [isLoading, setLoading] = useState(false)

async function handleCreateUser(email,password){
  setLoading(true)
    const data = await postData('http://localhost:5000/auth/signup', {
       email,password
    });
    setLoading(false)
  
       if(data.isSuccess) {
      return <Redirect to = "/signup"/>
  } else {
    // show error
  }
}
return(
    <div className= {styles.signupform}>  
        <label>
            <span>Email</span>
            <input
             type ="text"
             value ={email}
             onChange={e=>setEmail(e.target.value)}
             ></input>
        </label>
        
        <label>
            <span>Password</span>
            <input type ="text" value={password} onChange={e=>setPassword(e.target.value)}></input>
        </label>
       

        <button disabled = {isLoading} onClick ={()=>handleCreateUser(email,password)}>Sign up!</button>
    </div>
)



}


export default Signup

