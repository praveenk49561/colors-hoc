import React, { useState } from "react";
import generateHexColor from "../../Utils/GenerateHexColor";


const RandomColor = (props) => {
    const { Component, onClick } = props;

    const [color, setColor] = useState(generateHexColor());
    const [backgroundColor, setBackgroundColor] = useState(generateHexColor());
    const [borderColor, setBorderColor] = useState(generateHexColor());

    const clickHandler = () => {
        setColor(generateHexColor());
        setBackgroundColor(generateHexColor());
        setBorderColor(generateHexColor());
        onClick();
    };

    return <React.Fragment>
        <Component onClick={clickHandler} style={{ color, backgroundColor, borderColor }}>GENERATE</Component>
    </React.Fragment>;
};

export default RandomColor;