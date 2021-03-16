import React from 'react'
import './menu.css'

const Menu = () => {
    return (
        <div className="menuuu">
            <ul className="ulMenu navigation hidden-menu">
                <li className="liMenu"><a href="" className="aMenu">HOME</a></li>
                <li className="liMenu"><a href="" className="aMenu">ABOUT</a></li>
                <li className="liMenu"><a href="" className="aMenu">PORTFOLIO</a></li>
                <li className="liMenu"><a href="" className="aMenu">BLOG</a></li>
                <li className="liMenu"><a href="" className="aMenu">CONTACT</a></li>
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