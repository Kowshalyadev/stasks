import React from "react";
import { useState } from "react";
function Lifecycles1(){
           const [text,setText]=useState(1)
    const increment=()=>{
        setText(text+1)
       
    }
    const decrement=()=>{
        setText(text-1)
    }
    return(<div style={{textAlign:"center"}}>
        
        <h1>{text}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>)
}
export default Lifecycles1;