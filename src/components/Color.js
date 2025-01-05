import React, { useState } from 'react'

function Color(props) {
    const [color, setColor] = useState('Yellowwwwwwwww')
    const handleColorChange = () => {
        setColor('Purpleeeeeeee')
    }
  return (
    <div>
        <h1>My fav color is {props.color}</h1>
        <h1>Your fav color is {color}</h1>
        <button onClick={handleColorChange}>Change Color</button>
    </div>
  )
}

export default Color