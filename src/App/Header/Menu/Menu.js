import React from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menuuu">
            <ul className="ulMenu navigation hidden-menu">
                <li className="liMenu"><Link to="/" className="aMenu">HOME</Link></li>
                <li className="liMenu"><Link to="/about" className="aMenu">ABOUT</Link></li>
                <li className="liMenu"><Link to="/" className="aMenu">PORTFOLIO</Link></li>
                <li className="liMenu"><Link to="/" className="aMenu">BLOG</Link></li>
                <li className="liMenu"><Link to="/" className="aMenu">CONTACT</Link></li>
            </ul>
            <div className="nav-mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}


export default Menu