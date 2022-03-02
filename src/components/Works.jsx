import React from "react";
import intro from '../images/intro-bg.JPG';
import aboutMe from '../images/about2.jpg';
import HCA from '../images/HCA.png';
import Elphi from '../images/elphi.jpeg';
import firstRobots from "../images/first.jpeg";
import '../styles/images.css';
import { Container } from "@mui/material";
import LeftPicRighText from "./LeftPicRightText";
import RightPicLeftText from "./RightPicLeftText";
import { display, padding } from "@mui/system";

function Works() {
    // HCA
    const HCA_Picture = HCA;
    const HCA_Text = <p>
        2022
        <br></br><br></br>
        I am a cloud computing intern at HCA. I worked as a software engineer building scalable cloud
        applications and monitoring cloud usage.
        <br></br><br></br>
        This is what I did there. This is what I did there. This is what I did there.
        This is what I did there.This is what I did there. This is what I did there.
        This is what I did there. This is what I did there. This is what I did there.
        This is what I did there. This is what I did there.
        This is what I did there. This is what I did there. This is what I did there.
        This is what I did there.This is what I did there. This is what I did there.
        This is what I did there. This is what I did there. This is what I did there.
        This is what I did there. This is what I did there.
    </p>
    const HCA_Alt = "HCA Healthcare";

    const FirstRobotics_picture = firstRobots;
    const First_Text = <p>
        2022
        <br></br><br></br>
        I was a mentor for a local high school team who designed a robot for the First Robotics
        Competition.
        <br></br><br></br>
        This is what we accomplished in our first year...
    </p>
    const First_Alt = "First Robotics";

    const Elphi_picture = Elphi;
    const Elphi_text = <p>
        2021
        <br></br><br></br>
        I worked as a front end React developer creating a user management application.

        <br></br><br></br>
        This is what I accomplished during my internship.
    </p>
    const Elphi_alt = "Elphi"
    


    return (
        <div style={{display: 'grid'}}>
            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>

            <div>
                <p className="sectionTitleWorks">
                   Works
                </p>
            </div>
                <div style={{maxWidth: "100%", display: "grid", paddingBottom: "20px"}}>
                    {/* <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}> */}
                        <LeftPicRighText image={HCA_Picture} text={HCA_Text} altText={HCA_Alt}/>
                    {/* </Container> */}
                </div>
            </Container>

            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                <div style={{maxWidth: "100%", display: 'grid'}}>
                    {/* <Container> */}
                        <RightPicLeftText image={FirstRobotics_picture} text={First_Text} altText={First_Alt}/>
                    {/* </Container> */}
                </div>
            </Container>

            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                <div style={{maxWidth: "100%", paddingBottom: "20px", display: "grid"}}>
                    {/* <Container> */}
                    <LeftPicRighText image={Elphi_picture} text={Elphi_text} altText={Elphi_alt}/>
                    {/* </Container> */}
                </div>
            </Container>
        </div>
    );
} export default Works;