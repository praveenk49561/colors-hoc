const generateHexColor = () => {
    const characters = "0123456789ABCDEF";
    let hex = '#';
    for (var i = 0; i < 6; i++) {
        hex += characters[(Math.floor(Math.random() * 16))];
    }
    return hex;
}

export default generateHexColor;