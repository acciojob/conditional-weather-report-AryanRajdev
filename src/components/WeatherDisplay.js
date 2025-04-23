import React from 'react'

const WeatherDisplay = ({data,setData}) => {
  return (
    <div>
     <span style={{
        color : data.Temperature>20 ? "red":"blue"
     }}>
        <p>Temperature: {data.Temperature}</p>
        <p>Conditions: {data.Conditions}</p>
     </span>
    </div>
  )
}

export default WeatherDisplay;