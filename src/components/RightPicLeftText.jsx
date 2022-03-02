import React from "react";
import { Container } from "@mui/material";

function RightPicLeftText(props) {
        return (
            <Container disableGutters={true}>
                <div>
                    <div class='singlePictureWithTextRowRight'>
                        <img class="about" src={props.image} alt={props.altText} />
                    </div>

                    {/* <div>
                        <p class='sectionTitleAbout'>About Me</p>
                    </div> */}
                    <Container disableGutters={false}>
                        <div>
                            <p class='sectionContentAbout' style={{border:"solid"}}>
                                {props.text}
                            </p>
                        </div>
                    </Container>
                </div>
            </Container>
        )

} export default RightPicLeftText