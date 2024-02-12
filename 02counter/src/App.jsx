import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //  Hooks useState - > State Change in the DOM
  const [counter, setCounter] = useState(0) 

  // let counter = 5

  const addValue = () => {
    if(counter < 20) { 
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
    }   
  };
  
  const decreasevalue = () => {
    if (counter > 0) {
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>
      <button id='addvalue' onClick={addValue}>Increase Value </button> <br />
      <button onClick={decreasevalue}>Decrease Value</button>
    </>
  )
}

export default App
