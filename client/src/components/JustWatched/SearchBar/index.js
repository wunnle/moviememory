import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {

const [searchValue,setSearchValue] =  useState('')

async function handleSubmitSearch(e) {
    e.preventDefault()
        const res = await fetch(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=fdc90b38`
    );
  
    const data = await res.json();
    console.log(data);
   
  }
  
return (

<form className={styles.input}>
<input

value={searchValue}
onChange={(e)=>setSearchValue(e.target.value)}
type ="text"
/>

<button onClick={handleSubmitSearch}>Click</button>

</form>
)
}

export default SearchBar
