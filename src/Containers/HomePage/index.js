import React from "react";
import RandomColor from '../../Components/RandomColor/index';
import RandomElement from "../../Components/RandomElement";

const HomePage = () => {    
    return <React.Fragment>
        <div className="home-page-main-container">
            <RandomElement Component={RandomColor} />
        </div>
    </React.Fragment>;
};

export default HomePage;