import React from "react";
import { Container } from "@mui/material";

function RightPicLeftText(props) {
        return (
            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%', backgroundColor: "none"}}>
                <div>
                    <div class='singlePictureWithTextRowRight'>
                        <img class="about" src={props.image} alt={props.altText} style={{border: '5px solid #555'}}/>
                    </div>

                    {/* <div>
                        <p class='sectionTitleAbout'>About Me</p>
                    </div> */}
                    <Container disableGutters={false}>
                        <div>
                            <p class='sectionContentAbout'>
                            {props.text[0]}
                            <br></br><br></br>
                            {props.text[1]}
                            <br></br><br></br>
                            {props.text[2]}
                            </p>
                        </div>
                    </Container>
                </div>
            </Container>
        )

} export default RightPicLeftText