import React from "react";
import intro from '../images/intro-bg.JPG';
import aboutMe from '../images/about2.jpg';
import img1 from '../images/IMG_3672.JPG';
import img2 from '../images/IMG_3753.JPG';
import HCA from '../images/HCA.png';
import Elphi from '../images/elphi.jpeg';
import firstRobots from "../images/first.jpeg";
import '../styles/images.css';
import { Container } from "@mui/material";

function Works() {
    // const backgroundImage = intro;
    const amoutMeImage = aboutMe;
    const i1 = img1;
    const i2 = img2;
    const hca = HCA;
    const elphi = Elphi;
    const firstRobotics = firstRobots;
    // const backgroundImage = null;
    // const amoutMeImage = null;
    return (
        <Container disableGutters={true}>

            <div>
                <p class='sectionTitleAbout'>Works</p>
            </div>

            {/* <div className='container'>

                <div >
                    <p class='sectionTitleAbout'>Works</p>
                </div>

                <div style={{maxWidth:'100%', maxHeight: 'auto'}}>
                    <div className="tripplePicture">
                        <img src={hca} alt = "HCA"/>
                        <img src={elphi} alt = "Elphi"/>
                        <img src={firstRobotics} alt = "HCA"/>

                    </div>
                </div>

                

            </div>*/}    

        </Container>
            

            
            
            
        
    );
} export default Works;