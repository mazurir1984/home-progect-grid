import React from 'react'
import './AboutPage.css'
import './reset.css'
import notebookTitle from "./notebookTitle.png"
import ourStory from "./ourStory.png"
import Photoshop from "./Photoshop.png"
import Linebase from "./Linebase.png"
import progressPhotoshop from "./progressPhotoshop.png"
import Ellipse from "./Ellipse.png"
import RectangleBlack from "./RectangleBlack.png"
import RectangleSmall from "./RectangleSmall.png"
import ninety from "./ninety.png"
import Branding from "./Branding.png"
import progressBranding from "./progressBranding.png"
import ninetyFive from "./ninetyFive.png"
import Photography from "./Photography.png"
import progressPhotography from "./progressPhotography.png"
import fifty from "./fifty.png"
import WebDesign from "./WebDesign.png"
import progressWebDesign from "./progressWebDesign.png"
import eightyFive from "./eightyFive.png"
import GreyBackgroundAwesome from "./GreyBackgroundAwesome.png"
import LianJoy from "./LianJoy.png"
import AlbertThanht from "./AlbertThanht.png"
import JennPereira from "./JennPereira.png"
import lastLogo from "./lastLogo.png"


const AboutPage = () => {
    return (
        <>
            <main className="mainAboutPage">
                <div className="conteinerSliderAboutPage">
                    <div className="mainTextTitleAboutPage">
                        <div className="mainTitleAboutPage">
                            <h1 className="titleAboutPage">ABOUT THE AGENCY</h1>
                        </div>
                        <div className="minFreelancePortfolioAboutPage">
                            <h2 className="secondTitleAboutPage">WELCOME TO LIAN</h2>
                        </div>
                    </div>
                    <div className="titleImageSliderAboutPage">
                        <img className="notebookTitleAboutPage" src={notebookTitle} alt=""/>
                    </div>
                </div>

                <div className="conteinerOurStoryAboutPage">
                    <div className="photoOurStoryAboutPage">
                        <img className="photoOurStory" src={ourStory} alt=""/>
                    </div>
                    <div className="textOurStoryAboutPage">
                        <div className="OurStoryAllText">
                            <h2 className="TitleOurStory">OUR STORY</h2>
                            <p className="firstPOurStory">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nidh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                            <p className="secondPOurStory">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                        </div>
                        <div className="OurSkillsText">
                            <h2 className="TitleOurStory">OUR SKILLS</h2>
                            <div className="photoshopSkills">
                                <img className="photoshopReiting" src={Photoshop} alt=""/>
                                <div className="ProgressPhotoshop">
                                    <img className="Linebase" src={Linebase} alt=""/>
                                    <img className="progressPhotoshop" src={progressPhotoshop} alt=""/>
                                    <img className="ellipse" src={Ellipse} alt=""/>
                                    <img className="RectangleBlack" src={RectangleBlack} alt=""/>
                                    <img className="RectangleSmall" src={RectangleSmall} alt=""/>
                                    <img className="procentProgress" src={ninety} alt=""/>
                                </div>
                            </div>
                            <div className="brandingSkills">
                                <img className="brandingReiting" src={Branding} alt=""/>
                                <div className="ProgressBranding">
                                    <img className="Linebase" src={Linebase} alt=""/>
                                    <img className="progressBranding" src={progressBranding} alt=""/>
                                    <img className="ellipseSecond" src={Ellipse} alt=""/>
                                    <img className="RectangleBlackSecond" src={RectangleBlack} alt=""/>
                                    <img className="RectangleSmallSecond" src={RectangleSmall} alt=""/>
                                    <img className="procentProgressSecond" src={ninetyFive} alt=""/>
                                </div>
                            </div>
                            <div className="photographySkills">
                                <img className="photographyReiting" src={Photography} alt=""/>
                                <div className="ProgressPhotography">
                                    <img className="Linebase" src={Linebase} alt=""/>
                                    <img className="progressPhotography" src={progressPhotography} alt=""/>
                                    <img className="ellipseThree" src={Ellipse} alt=""/>
                                    <img className="RectangleBlackThree" src={RectangleBlack} alt=""/>
                                    <img className="RectangleSmallThree" src={RectangleSmall} alt=""/>
                                    <img className="procentProgressThree" src={fifty} alt=""/>
                                </div>
                            </div>
                            <div className="webDesignSkills">
                                <img className="webDesignReiting" src={WebDesign} alt=""/>
                                <div className="ProgressWebDesign">
                                    <img className="Linebase" src={Linebase} alt=""/>
                                    <img className="progressWebDesign" src={progressWebDesign} alt=""/>
                                    <img className="ellipseFour" src={Ellipse} alt=""/>
                                    <img className="RectangleBlackFour" src={RectangleBlack} alt=""/>
                                    <img className="RectangleSmallFour" src={RectangleSmall} alt=""/>
                                    <img className="procentProgressFour" src={eightyFive} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="conteinerAwesomeTeam">
                    <div class="awersomeTitle">
                        <h2 class="TitleAwersome">AWESOME TEAM</h2>
                        <p class="TextAwesome">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                    </div>
                    <div class="awesomeInformation">
                        <div class="LianJoy">
                            <div class="photoLian">
                                <div class="photoDivAwesome">
                                    <img class="GreyBackgroundAwesome" src={GreyBackgroundAwesome} alt=""/>
                                    <img class="photoLianJoy" src={LianJoy} alt=""/>
                                </div>
                            </div>
                            <div class="informLian">
                                <p class="nameLian">LIAN JOY</p>
                                <p class="CEOLian">CEO/Founder</p>
                                <p class="textLian">Lorem ipsum dolor sit amet,conse ctetuer adipi, sed diam nonu mmy nibh euis mod tinci</p>
                            </div>
                        </div>
                        <div class="LianJoy">
                            <div class="photoLian">
                                <div class="photoDivAwesome">
                                    <img class="GreyBackgroundAwesome" src={GreyBackgroundAwesome} alt=""/>
                                    <img class="phtoAlbertThanh" src={AlbertThanht} alt=""/>
                                </div>
                            </div>
                            <div class="informLian">
                                <p class="nameLian">ALBERT THANH</p>
                                <p class="CEOLian">CEO/Founder</p>
                                <p class="textLian">Lorem ipsum dolor sit amet,conse ctetuer adipi, sed diam nonu mmy nibh euis mod tinci</p>
                            </div>
                        </div>
                        <div class="LianJoy">
                            <div class="photoLian">
                                <div class="photoDivAwesome">
                                    <img class="GreyBackgroundAwesome" src={GreyBackgroundAwesome} alt=""/>
                                    <img class="photoJennPereira" src={JennPereira} alt=""/>
                                </div>
                            </div>
                            <div class="informLian">
                                <p class="nameLian">JENN PEREIRA</p>
                                <p class="CEOLian">CEO/Founder</p>
                                <p class="textLian">Lorem ipsum dolor sit amet,conse ctetuer adipi, sed diam nonu mmy nibh euis mod tinci</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="conteinerLastLogo">
                    <div class="lianLastLogo">
                        <img src={lastLogo} class="lastLogo" alt=""/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage