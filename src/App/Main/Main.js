import React from 'react'
import ProductList from './Products/ProductList'
import lastLogo from './lastLogo.png'
import obliqueLine from './obliqueLine.png'
import imgSabonete from './imgSabonete.png'
import imgLamp from './imgLamp.png'
import imgTableware from './imgTableware.png'
import imgFurniture from './imgFurniture.png'
import imgTimer from './imgTimer.png'
import imgArmchairs from './imgArmchairs.png'
import imgClock from './imgClock.png'
import imgChairsAndTables from './imgChairsAndTables.png'
import imgCorinne from './imgCorinne.png'
import imgIconic from './imgIconic.png'



const Main = () => {
    return (
        <main className="main">
            <div className="conteinerSlider">
                <div className="mainTitle">
                    <h1 className="title">LIAN CREATIVE AGENCY</h1>
                </div>
                <div className="minFreelancePortfolio">
                    <h2 className="secondTitle">MINIMAL FREELANCE PORTFOLIO</h2>
                </div>
            </div>
            <div className="conteiner">
                <div className="conteinerCategories">
                    <ul className="categories">
                        <div className="firstCategories">
                            <li className="liCategories"><a href="/" className="aCategories">ALL</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">LOGO</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">MOBILE APP</a></li>  
                        </div>
                        <div className="middleCategories">
                            <div className="divLine"><img src={obliqueLine} className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">WORDPRESS</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">WEBDESIGN</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique"/></div>
                        </div>
                        <div className="secondCategories">
                            <li className="liCategories"><a href="/" className="aCategories">UI/IX</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">BRANDING</a></li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="picturesConteiner">
                <div className="conteiner">
                <div className="MainConteiner">
                        <div className="firstSpeaker">
                            <div className="sabonete">
                                <img src={imgSabonete} className="imgSabonete"/>
                            </div>
                            <div className="lamp">
                                <img src={imgLamp} className="imgLamp"/>
                            </div>
                            <div className="tableware">
                                <img src={imgTableware} className="imgTableware"/>
                            </div>
                        </div>
                        <div className="middleSpeaker">
                            <div className="furniture">
                                <img src={imgFurniture} className="imgFurniture"/>
                                <p className="Branding">Categories: Branding Design</p>
                            </div>
                            <div className="timer">
                                <img src={imgTimer} className="imgTimer"/>
                            </div>
                            <div className="armchairs">
                                <img src={imgArmchairs} className="imgArmchairs"/>
                            </div>
                            <div className="clock">
                                <img src={imgClock} className="imgClock"/>
                            </div>
                        </div>
                        <div className="lastSpeaker">
                            <div className="chairsAndTables">
                                <img src={imgChairsAndTables} className="imgChairsAndTables"/>
                            </div>
                            <div className="corinne">
                                <img src={imgCorinne} className="imgCorinne"/>
                            </div>
                            <div className="iconic">
                                <img src={imgIconic} className="imgIconic"/>
                            </div>
                        </div> 
                    </div>
                    <div className="buttonLoad">
                        <button className="load">LOAD MORE</button>
                    </div>
                </div>
            </div>
            <div className="conteiner">
                <div className="lianLastLogo">
                    <img src={lastLogo} className="lastLogo" alt=""/>
                </div>
            </div>
        </main>
    )
}

export default Main