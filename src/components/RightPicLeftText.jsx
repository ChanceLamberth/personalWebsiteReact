import React from "react";
import { Container } from "@mui/material";

function RightPicLeftText(props) {
        return (
            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                <div>
                    <div class='singlePictureWithTextRowRight'>
                        <img class="about" src={props.image} alt={props.altText} />
                    </div>

                    {/* <div>
                        <p class='sectionTitleAbout'>About Me</p>
                    </div> */}
                    <Container disableGutters={false}>
                        <div>
                            <p class='sectionContentAbout'>
                                {props.text}
                            </p>
                        </div>
                    </Container>
                </div>
            </Container>
        )

} export default RightPicLeftText