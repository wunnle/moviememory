import React from 'react'
import styles from './LoginForm.module.css'
import {ReactComponent as Logo} from './Logo.svg'

const LoginForm = ({children,handleSubmit}) => (
<div>
    <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
            <Logo className={styles.logo}/>
            <h2 className={styles.loginTitle}>Welcome Back!</h2>
            <p className={styles.loginDescription}>Login to your account</p>
        </div>
        {children}
    </form>
</div>
)

export default LoginForm