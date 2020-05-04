import React from 'react'

const ResultCard = ({movie}) =>{
    const poster = movie.Poster

    return (
        <div className = "resultcard">
            <h2>{movie.Title}</h2>
            <div>
            <img src ={poster}/>
            </div>
        </div>
    )
}
export default ResultCard