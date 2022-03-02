import React from "react";
import Cards from "./Cards";
import img2 from '../images/IMG_3753.JPG';

function Languages() {
    const img = img2;
    const imgAlt = "svg";

    return (
        <div>
            <Cards image={img} altText={imgAlt}/>

        </div>
    )
} export default Languages;