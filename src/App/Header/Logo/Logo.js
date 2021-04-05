import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Logo = () => {
    return (
        <div className="Logo">
            <Link to="/"><img src={logo} className="imgLogo" alt=""/></Link>
            
        </div>
    )
}

export default Logo