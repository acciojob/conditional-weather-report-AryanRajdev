import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

// const data = [
//   {
//     id : 1,
//     temperature : 25,
//     conditions : "Sunny"
//   },
//   {
//     id : 2,
//     temperature : 15,
//     conditions : "Cold"
//   }

// ]


const App = () => {

  const [data,setData] = useState({
    id : 1,
    Temperature: 25,
    Conditions: "Sunny"
  });


  return (
    <div>
       <WeatherDisplay data = {data} setData = {setData}></WeatherDisplay>
    </div>
  )
}

export default App
