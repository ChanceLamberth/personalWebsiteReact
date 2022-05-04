import React, {useState} from "react";
// import intro from '../images/intro-bg.JPG';
// import aboutMe from '../images/about2.jpg';
import HCA from '../images/HCA.png';
import Elphi from '../images/elphi.jpeg';
import firstRobots from "../images/first.jpeg";
import '../styles/images.css';
import { Container } from "@mui/material";
import LeftPicRightText from "./LeftPicRightText";
import RightPicLeftText from "./RightPicLeftText";
// import { display, padding } from "@mui/system";

function Works() {
    const [textDataHCA] = useState([]);
    const [textDataFIRST] = useState([]);
    const [textDataElphi] = useState([])


    const HCA_Function = () => {
        let HCA_PICTURE = HCA;
        
        let text1 = "2022"
        let text2 = "I am a cloud computing intern at HCA. I worked as a software engineer building scalable cloud applications and monitoring cloud usage."
        let text3 = "This is what I did there. This is what I did there."
        textDataHCA.push(text1)
        textDataHCA.push(text2)
        textDataHCA.push(text3)

        let HCA_ALT = "HCA Healthcare";

        return (
            <LeftPicRightText text={textDataHCA} altText={HCA_ALT} image={HCA_PICTURE}/>
        );
    }

    const FIRST_Function = () => {
        let FirstRobotics_picture = firstRobots;
        let FirstRobotics_Alt = "First Robotics"

        let text1 = "2022"
        let text2 = "I was a mentor for a local high school team who designed a robot for the First Robotics Competition."
        let text3 = "This is what we accomplished in our first year..."

        textDataFIRST.push(text1)
        textDataFIRST.push(text2)
        textDataFIRST.push(text3)


        return (
            <div style={{maxWidth: "100%", display: 'grid'}}>
                <RightPicLeftText text={textDataFIRST} altText={FirstRobotics_Alt} image={FirstRobotics_picture}/>
            </div>
        );
    }

    const ELPHI_Function = () => {
        let Elphi_picture = Elphi;
        let Elphi_alt = "Elphi";

        let text1 = "2021"
        let text2 = "I worked as a front end React developer creating a user management application."
        let text3 = "This is what I accomplished during my internship."

        textDataElphi.push(text1)
        textDataElphi.push(text2)
        textDataElphi.push(text3)

        return (
            <div style={{maxWidth: "100%", paddingBottom: "20px", display: "grid"}}>
                <LeftPicRightText text={textDataElphi} altText={Elphi_alt} image={Elphi_picture}/>
            </div>
        )
    }
    


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
                        {HCA_Function()}
                    {/* </Container> */}
                </div>
            </Container>

            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                {FIRST_Function()}
            </Container>

            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                {ELPHI_Function()}
            </Container>
        </div>
    );
} export default Works;