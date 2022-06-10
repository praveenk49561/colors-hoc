import React from "react";

const Button = (props) => {
    const { children, className, style, onClick } = props;
    return <React.Fragment>
        <button style={style} onClick={onClick} className={`btn ${className}`}>
            <div className="btn-cover"></div>
            {children}
        </button>
    </React.Fragment>
};

export default Button;