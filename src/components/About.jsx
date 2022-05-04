import React, {useState} from "react";
// import intro from '../images/intro-bg.JPG';
import aboutMe from '../images/about2.jpg';
// import img1 from '../images/IMG_3672.JPG';
import img2 from '../images/IMG_3753.JPG';
import '../styles/images.css';
import '../styles/about.css';
import { Container } from "@mui/material";
import LeftPicRightText from "./LeftPicRightText";

function About() {
    const [textData] = useState([]);

    // Google Hero image on W3school
    // https://www.w3schools.com/howto/howto_css_hero_image.asp


    // Images: Need find a better way to incorporate this.
    // const amoutMeImage = aboutMe;
    // const i1 = img1;
    const i2 = img2;

    const HeaderSection = () => {
        return (
            <div>
                <p className="paragraph-large" >
                    Northeastern University<br></br>Expected Graduation December 2022
                </p>
            </div>
        );
    }

    const HeaderImage = () => {
        return (
            <div style={{maxWidth:'100%', maxHeight: 'auto'}}>
                {/* <p style={{position: "absolute", top: '50%', left: "50%", transform: 'translate(-50%, -50%)'}}>{HeaderSection()}</p> */}
                <div className="mainImage">
                    <img src={i2} alt = "Boston"/>
                </div>
            </div>
        );
    }

    const AboutMe = () => {
        //props.image
        //props.altText
        //props.text

        let text1 = "My name is Chance and I am currently in my 2nd year of my Computer Science Master Program at Northeastern University. My expected graduation is December 2022. I currently hold a B.S. in Economics and a minor in History also from Northeastern. Why the big switch? I was working for a large asset manager in Boston, MA and recognized the significant impact software had in finance and other industries. I decided then and there that I wanted to be at the forefront of innovative software."
        let text2 = "I discovered Northeastern provides a bridge to Master program called Align with the belief that computer and data science is for everyone, regardless of background. I stand with that belief. The program is structured with bridge courses that prepare students of any undergraduate discipline for graduate level coursework in Computer Science. Align has changed the way I view the world and set me on a path that is for me."
        let text3 = "My life was a revolving door of sports growing up. I started playing baseball when I was four. Then in middle school, I tacked on running. Track & Field and Cross Country eventually became my new outlet and earned me a scholarship to run at the Division 1 level. I stopped running in March 2020 when the Pandemic hit and cut my collegiate season short. It was a good run, no pun intended, and I posted some strong times. The highlight of my running career was running one mile in 4:09, an 8k in under 24 minutes, and a multitude of opportunities to compete across the United States. Now, I am an avid cyclist hoping to challenge myself in a new way."

        textData.push(text1)
        textData.push(text2)
        textData.push(text3)

        
        let image = aboutMe;
        let altText = "Chance Lamberth Photo";
        
        return (
            <LeftPicRightText text={textData} altText={altText} image={image}/>


            // <div>
            //     <div class='singlePictureWithTextRowLeft'>
            //         <img class="about" src={amoutMeImage} alt="Chance in snow" />
            //     </div>

            //     <div>
            //         <p class='sectionTitleAbout'>About Me</p>
            //     </div>
            //     <Container>
            //         <div>
            //             <p class='sectionContentAbout'>
            //                 My name is Chance and I am currently in my 2nd year of my Computer Science Master Program at Northeastern University. My expected graduation is December 2022. I currently hold a B.S. in Economics and a minor in History also from Northeastern. Why the big switch? I was working for a large asset manager in Boston, MA and recognized the significant impact software had in finance and other industries. I decided then and there that I wanted to be at the forefront of innovative software.
            //                 <br></br><br></br>
            //                 I discovered Northeastern provides a bridge to Master program called Align with the belief that computer and data science is for everyone, regardless of background. I stand with that belief. The program is structured with bridge courses that prepare students of any undergraduate discipline for graduate level coursework in Computer Science. Align has changed the way I view the world and set me on a path that is for me.
            //                 <br></br><br></br>
            //                 My life was a revolving door of sports growing up. I started playing baseball when I was four. Then in middle school, I tacked on running. Track & Field and Cross Country eventually became my new outlet and earned me a scholarship to run at the Division 1 level. I stopped running in March 2020 when the Pandemic hit and cut my collegiate season short. It was a good run, no pun intended, and I posted some strong times. The highlight of my running career was running one mile in 4:09, an 8k in under 24 minutes, and a multitude of opportunities to compete across the United States. Now, I am an avid cyclist hoping to challenge myself in a new way.
            //             </p>
            //         </div>
            //     </Container>
            // </div>   

        );
    }


    return (
        <div style={{display: "grid"}}>
            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                {HeaderImage()}
                {HeaderSection()}
                
                <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                    {AboutMe()}
                </Container>            
            </Container>
        </div>
    )
} export default About;