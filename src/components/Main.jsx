import React from "react";
import intro from '../images/intro-bg.JPG';
import aboutMe from '../images/about2.jpg';
import img1 from '../images/IMG_3672.JPG';
import img2 from '../images/IMG_3753.JPG';
import '../styles/images.css';

function Main() {
    const backgroundImage = intro;
    const amoutMeImage = aboutMe;
    const i1 = img1;
    const i2 = img2;
    // const backgroundImage = null;
    // const amoutMeImage = null;
    return (
        <div>
            <div style={{maxWidth:'100%', maxHeight: 'auto'}}>
                {/* <Container maxWidth={false}> */}
                    <div className="mainImage">
                    <img src={i2} alt = "Boston"/>
                    <div className="textCenter">Hello</div>
                    </div>
                {/* </Container> */}
            </div>

            <div>
                <p className="paragraph-large">
                    Northeastern University<br></br>Expected Graduation December 2022
                </p>
            </div>

            {/* <div clas="singlePictureWithText"> */}
                <div class='singlePictureWithTextRowLeft'>
                    <img class="about" src={amoutMeImage} alt="Chance in snow" />
                </div>

                <div class='singlePictureWithTextRowRight'>
                    <div>
                        <p class='sectionTitleAbout'>About Me</p>
                    </div>

                    <div>
                        <p class='sectionContentAbout'>
                        My name is Chance and I am currently in my 2nd year of my Computer Science Master Program at Northeastern University. My expected graduation is December 2022. I currently hold a B.S. in Economics and a minor in History also from Northeastern. Why the big switch? I was working for a large asset manager in Boston, MA and recognized the significant impact software had in finance and other industries. I decided then and there that I wanted to be at the forefront of innovative software.
                        <br></br><br></br>
                        I discovered Northeastern provides a bridge to Master program called Align with the belief that computer and data science is for everyone, regardless of background. I stand with that belief. The program is structured with bridge courses that prepare students of any undergraduate discipline for graduate level coursework in Computer Science. Align has changed the way I view the world and set me on a path that is for me.
                        <br></br><br></br>
                        My life was a revolving door of sports growing up. I started playing baseball when I was four. Then in middle school, I tacked on running. Track & Field and Cross Country eventually became my new outlet and earned me a scholarship to run at the Division 1 level. I stopped running in March 2020 when the Pandemic hit and cut my collegiate season short. It was a good run, no pun intended, and I posted some strong times. The highlight of my running career was running one mile in 4:09, an 8k in under 24 minutes, and a multitude of opportunities to compete across the United States. Now, I am an avid cyclist hoping to challenge myself in a new way.

                        </p>
                    </div>
                </div>

                
            {/* </div> */}
            
        </div>
        
    );
} export default Main;