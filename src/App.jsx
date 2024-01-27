import "./App.css"
import Button from "./components/Button";
import style from "./components/Bg.module.css";
import Heading from "./components/Heading";
import Input from "./components/Input"
import { useState } from "react";
import React from "react";



function App(){

  
let [calVal , setCalVal]=useState("");
let onButtonClick=(event)=>{
  let buttonText=event.target.innerHTML;

  if(buttonText==="AC"){
     setCalVal("");

  }else if(buttonText==="DE"){
    const val=calVal.slice(0,-1);
    setCalVal(val);
    

  }else if(buttonText==="="){
    
     const answer=  eval(calVal);
     setCalVal(answer);

  }else{
    const newDisplay=calVal + buttonText;
    setCalVal(newDisplay);
  }
}

  return(
    <div className={style.bg}>
      <Heading/>
      <Input display={calVal}/>
      <Button onButtonClick={onButtonClick}/>
   
    </div>
  );
}
export default App;