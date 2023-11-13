import React, { useState } from 'react'

const Cream = () => {
    const [Count,setcount]=useState(10);

    // Increase Function
    const IncHandler =() => {
        console.log("Inc" +  Count )
        setcount(Count => Count + 1)
    }

    //decrement function
    const DecHandler =() => {
        setcount(Count => Count - 1)
      
    }

    //reset function
    const ResHandler = ()=> {
        console.log("button is working")
        setcount(10)
    }

  return (
    <div>
        <p>{Count}</p>
      <button onClick={IncHandler}>incre</button>
      <button onClick={DecHandler}>Decre</button> 
      <button onClick={ResHandler}>Reset</button>
    </div>
  )
}

export default Cream
