import React, { useState } from "react";
import Button from "../Button";
import generateHexColor from "../../Utils/GenerateHexColor";

const RandomElement = (props) => {
    const { Component } = props;

    const [count, setCount] = useState(1);

    const clickHandler = () => {
        setCount(count + 1);
    };

    const generateElements = () => {
        let elements = [];
        for (let i = 1; i <= count; i++) {
            const dynamicKey = generateHexColor();
            elements.push(<Component key={`${dynamicKey}+${i}`} Component={Button} onClick={clickHandler} />);
        };
        return elements;
    }

    return <React.Fragment>
        {generateElements()}
    </React.Fragment>;
};

export default RandomElement;