import React from 'react'
import './search.css'
import lupa from './lupa.png'

const Search = () => {
    return (
        <div className="search">
            <button className="buttonSearch"><img src={lupa} className="lupaSearch"/></button>
        </div>
    )
}

export default Search