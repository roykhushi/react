import { useState } from 'react'
import './App.css'

function App() {
  //using let bcz the value is changing on every click

  let [counter,setCounter] = useState(0);
  
  function IncrValue(){
    console.log("Clicked" , counter);
    if(counter+1>20){
      alert("Can't go beyond 20!!");
    }
    else{
      setCounter(counter+1);
    }
    
  }
  function DecrValue(){
    
    if(counter-1<0){
      alert("Cant go below 0!!");
    }
    else{
      setCounter(counter-1);
    }
    
    
  }

  return (
    <>
      <h1>Counter Project | Learning Hooks</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={IncrValue}>Increase: {counter}</button>
      <br />
      <br />
      <button onClick={DecrValue}>Decrease: {counter}</button>
    </>
  )
}

export default App
