import React, { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(0);
  const increase = () => {
    setCount(count + 1);
    setMessage("artırıldı");
  };
  const decrease = () => {
    setCount(count - 1);
    setMessage("azlatıldı");
  };
useEffect(() => {
  const myTimer = setInterval(() => {
   setTimer(timer=> ++timer )
 }, 1000); 
 return ()=>clearInterval(myTimer) /// component will unmount for function componennts

},[])
  
  //   //for cdu and cdm
  //   useEffect(() => {

  //     console.log("cdm and cdu runned with useEffect ")

  //     })

  // //only cdm runned
  //   useEffect(() => {


  //     console.log("cdm runned with useEffect")

  //     },[])
  // //only cdu runned

  useEffect(() => {

  //console.log("cdu runned when changed count state with useEffect")
console.log("timer with use effect(cdu)",timer)
     },[timer])

  return (
    <div>
      <h1>FunctionalComponent</h1>
      <h2>Count : {count} </h2>
      <h2>Message : {message} </h2>
      <h2>Timer : {timer} </h2>
      <button onClick={() => increase()}> Increase </button>
      <br />
      <button onClick={() => decrease()}> Decrease </button>
    </div>
  );
}
