import React from "react";
import './homepage.css';

function Homepage(){
    return (
        <div className="main-ctn">
            <h2 className="number">0</h2>
            <div className="btn-ctn">
                <button className="increase">INcrease</button>
                <button className="decrease">DEcrease</button>
            </div>
        </div>
    )
}


export default Homepage;