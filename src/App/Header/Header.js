import React from 'react'

import "./header.css"
import "./search.css"
import "./menuuu.css"

const Header = () => {
    return (
        <header className="header">
            <div className="conteiner">
                <div className="conteinerHeader">
                    <div className="Logo">
                        <img src="logo.png" className="imgLogo"/>
                    </div>
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
                    <div className="search">
                        <button className="buttonSearch"><img src="lupa.png" className="lupaSearch"/></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header