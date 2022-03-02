import React from "react";
import { Container } from "@mui/material";

function LeftPicRighText(props) {
        return (
            <Container disableGutters={true}>
                <div>
                    <div class='singlePictureWithTextRowLeft'>
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

} export default LeftPicRighText