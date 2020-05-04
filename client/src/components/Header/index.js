import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import styles from './Header.module.css'
import { useSelector } from 'react-redux'
import {selectIsUserLoggedIn, selectLoggedInUserEmail} from '../../redux/accessors'


const Header = () => {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    const loggedInUserEmail = useSelector(selectLoggedInUserEmail)
    
    return ( 
 
    <div className = {styles.header}>
        {isUserLoggedIn ?
            (  
                <div>    
    <Link to = "/mycollection" className={styles.mycollection}> 
    <span>{loggedInUserEmail} Collection </span>
    </Link>
    <Link to = "/justwatched" className={styles.justwatched}>
        Just Watched
    </Link>
    </div>         
      ) : (
    <Redirect to ="/login"/>
)}

    </div>
)
    }

export default Header