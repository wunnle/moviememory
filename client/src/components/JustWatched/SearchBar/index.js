import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {

const [searchValue,setSearchValue] =  useState('')

async function handleSubmitSearch(searchValue) {
    
    const res = await fetch(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=fdc90b38`
    );
  
    const data = await res.json();
    console.log(data);
   
  }
  
  handleSubmitSearch();

return (

<form className={styles.input}>
<input

value={searchValue}
onChange={(e)=>setSearchValue(e.target.value)}
type ="text"
/>

<button 
onClick={handleSubmitSearch} 
type="submit"
/> 
</form>
)
}

export default SearchBar
