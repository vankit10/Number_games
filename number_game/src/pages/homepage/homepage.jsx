import React, { useState } from "react";
import './homepage.css';

function Homepage(){
    const [num,setNum]=useState(0)
    const [flag,setFlag]=useState(false)
    function increaseHandler(){
        
       if(num===10){
        setFlag(!flag)
       }
       else{
            setNum(num+1);
            
    }
    }

    function decreaseHandler(){
        if(num===-10){
            setFlag(!flag)
        }

            else{            
            setNum(num-1);
                 
    }

    }
    function closeHandler(){
        console.log("error")
        setFlag(!flag)
    }

    return (
        <div className="main-ctn">
            <h2 className="number">{num}</h2>
            <div className="btn-ctn">
                <button className="increase" onClick={increaseHandler}>INcrease</button>
                <button className="decrease" onClick={decreaseHandler} >DEcrease</button>
                {flag===true && <div className="warning-box">
                    <button className="close" onClick={closeHandler}>X</button>
                   
                    <h2 className="warning">Number can not go beyond this</h2>
                </div>}
            </div>
        </div>
    )
}



export default Homepage;