import React from 'react'
import lastFooterText from './lastFooterText.png'
import facebook from './facebook.png'
import google from './google.png'
import twitter from './twitter.png'
import insta from './insta.png'
import dribble from './dribble.png'
import pinterest from './pinterest.png'
import instagramm from './instagramm.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerSeties">
                <div className="conteiner">
                    <div className="seties">
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgFacebook" src={facebook}/></a>
                        </div>
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgGoogle" src={google}/></a>
                        </div>
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgTwitter" src={twitter}/></a>
                        </div>
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgInsta" src={insta}/></a>
                        </div>
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgDribble" src={dribble}/></a>
                        </div>
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgPinterest" src={pinterest}/></a>
                        </div>
                        <div className="footerAllSeties">
                            <a href="" className="aseties"><img className="imgInstagramm" src={instagramm}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conteiner">
                <div className="footerText">
                    <img src={lastFooterText} className="lastFooterText" alt=""/>
                </div>
            </div>
        </footer>
    )
}

export default Footer