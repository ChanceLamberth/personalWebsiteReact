import React from "react";
import { Container } from "@mui/material";

//props.image
//props.altText
//props.text

function LeftPicRightText(props) {


    return (
        <Container maxWidth={false} style={{margin: '0', padding: '0', width: '100%'}}>
            <div>
                <div class='singlePictureWithTextRowLeft'>
                    <img class="about" src={props.image} alt={props.altText} />
                </div>
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

} export default LeftPicRightText