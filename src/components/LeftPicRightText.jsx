import React from "react";
import { Container } from "@mui/material";

function LeftPicRighText(props) {
        return (
            <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
                <div>
                    <div class='singlePictureWithTextRowLeft'>
                        <img class="about" src={props.image} alt={props.altText} />
                    </div>
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