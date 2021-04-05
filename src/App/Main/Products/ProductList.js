import React from 'react'
import lastLogo from './Products/lastLogo.png'
import obliqueLine from './Products/obliqueLine.png'
import imgSabonete from './Products/imgSabonete.png'
import imgLamp from './Products/imgLamp.png'
import imgTableware from './Products/imgTableware.png'
import imgFurniture from './Products/imgFurniture.png'
import imgTimer from './Products/imgTimer.png'
import imgArmchairs from './Products/imgArmchairs.png'
import imgClock from './Products/imgClock.png'
import imgChairsAndTables from './Products/imgChairsAndTables.png'
import imgCorinne from './Products/imgCorinne.png'
import imgIconic from './Products/imgIconic.png'

const ProductList = () => {
    retturn (
        <>
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
                            <div className="divLine"><img src={obliqueLine} className="oblique" alt=""/></div>
                            <li className="liCategories"><a href="/" className="aCategories">LOGO</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique" alt=""/></div>
                            <li className="liCategories"><a href="/" className="aCategories">MOBILE APP</a></li>  
                        </div>
                        <div className="middleCategories">
                            <div className="divLine"><img src={obliqueLine} className="oblique" alt=""/></div>
                            <li className="liCategories"><a href="/" className="aCategories">WORDPRESS</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique" alt=""/></div>
                            <li className="liCategories"><a href="/" className="aCategories">WEBDESIGN</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique" alt=""/></div>
                        </div>
                        <div className="secondCategories">
                            <li className="liCategories"><a href="/" className="aCategories">UI/IX</a></li>
                            <div className="divLine"><img src={obliqueLine} className="oblique" alt=""/></div>
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
                                <img src={imgSabonete} className="imgSabonete" alt=""/>
                            </div>
                            <div className="lamp">
                                <img src={imgLamp} className="imgLamp" alt=""/>
                            </div>
                            <div className="tableware">
                                <img src={imgTableware} className="imgTableware" alt=""/>
                            </div>
                        </div>
                        <div className="middleSpeaker">
                            <div className="furniture">
                                <img src={imgFurniture} className="imgFurniture" alt=""/>
                                <p className="Branding">Categories: Branding Design</p>
                            </div>
                            <div className="timer">
                                <img src={imgTimer} className="imgTimer" alt=""/>
                            </div>
                            <div className="armchairs">
                                <img src={imgArmchairs} className="imgArmchairs" alt=""/>
                            </div>
                            <div className="clock">
                                <img src={imgClock} className="imgClock" alt=""/>
                            </div>
                        </div>
                        <div className="lastSpeaker">
                            <div className="chairsAndTables">
                                <img src={imgChairsAndTables} className="imgChairsAndTables" alt=""/>
                            </div>
                            <div className="corinne">
                                <img src={imgCorinne} className="imgCorinne" alt=""/>
                            </div>
                            <div className="iconic">
                                <img src={imgIconic} className="imgIconic" alt=""/>
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
        </>
    )
}

export default ProductList