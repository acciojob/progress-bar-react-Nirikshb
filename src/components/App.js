
import React from "react";
import { useState, useEffect } from "react";
import './../styles/App.css';

const Bar = () => {
  const [progress, setProgress]=useState(0);
 
  useEffect(()=>{
    const timer = setInterval(()=>{
     setProgress((prevProgress)=>{
      if(prevProgress >=100){
        clearInterval(timer);
        return;
      }
      return prevProgress +10;
    });
  },1000);
   return()=>clearInterval(timer);
},[]);
    
  return (
    <div id="barOuter">
      <div id="barInner"
      style={{width : `${progress}%`}}>
      {`${progress}%`}
      </div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default Bar;
