import styles from './Collection.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from '../Header'

const Collection = () => {


return(
    <div className={styles.home}> 
    <div className={styles.cardsHolder}>
    <Header/>

    </div>
   
    </div>
  
)
}
export default Collection