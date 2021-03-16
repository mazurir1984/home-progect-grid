import React from 'react'

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
                            <div className="divLine"><img src="obliqueLine.png" className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">LOGO</a></li>
                            <div className="divLine"><img src="obliqueLine.png" className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">MOBILE APP</a></li>  
                        </div>
                        <div className="middleCategories">
                            <div className="divLine"><img src="obliqueLine.png" className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">WORDPRESS</a></li>
                            <div className="divLine"><img src="obliqueLine.png" className="oblique"/></div>
                            <li className="liCategories"><a href="/" className="aCategories">WEBDESIGN</a></li>
                            <div className="divLine"><img src="obliqueLine.png" className="oblique"/></div>
                        </div>
                        <div className="secondCategories">
                            <li className="liCategories"><a href="/" className="aCategories">UI/IX</a></li>
                            <div className="divLine"><img src="obliqueLine.png" className="oblique"/></div>
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
                                <img src="imgSabonete.png" className="imgSabonete"/>
                            </div>
                            <div className="lamp">
                                <img src="imgLamp.png" className="imgLamp"/>
                            </div>
                            <div className="tableware">
                                <img src="imgTableware.png" className="imgTableware"/>
                            </div>
                        </div>
                        <div className="middleSpeaker">
                            <div className="furniture">
                                <img src="imgFurniture.png" className="imgFurniture"/>
                                <p className="Branding">Categories: Branding Design</p>
                            </div>
                            <div className="timer">
                                <img src="imgTimer.png" className="imgTimer"/>
                            </div>
                            <div className="armchairs">
                                <img src="imgArmchairs.png" className="imgArmchairs"/>
                            </div>
                            <div className="clock">
                                <img src="imgClock.png" className="imgClock"/>
                            </div>
                        </div>
                        <div className="lastSpeaker">
                            <div className="chairsAndTables">
                                <img src="imgChairsAndTables.png" className="imgChairsAndTables"/>
                            </div>
                            <div className="corinne">
                                <img src="imgCorinne.png" className="imgCorinne"/>
                            </div>
                            <div className="iconic">
                                <img src="imgIconic.png" className="imgIconic"/>
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
                    <img src="lastLogo.png" className="lastLogo"/>
                </div>
            </div>
        </main>
    )
}

export default Main