import React from "react"
import './App.css'

function App() {

  const inputRef = React.useRef();

  const [currentCount , setCurrentCount] = React.useState(0);
  const timer = React.useRef();
 
  function focusOnInput(){
    //document.getElementById("name").focus();
    inputRef.current.focus()
  }
  function startClock(){
    let value = setInterval(function(){
      setCurrentCount(c => c + 1 )
    },1000)
    timer.current = value;
  }
  function stopClock(){
      clearInterval(timer.current)
  }

  return (
    <>
    <div>
       <h1>Building a form  to showcase ref to a DOM element</h1>
      Signup
      <input ref={inputRef} type='text'/>
      <input type='text'/>
      <button onClick={focusOnInput}>Submit</button>
    </div>
    <hr/>
    <div>
      <h1>Building a clock to showcase ref to a value</h1>
       {currentCount}
       <button onClick={startClock}>Start</button>
       <button onClick={stopClock}>Stop</button>
    </div>
    </>
  )
}



export default App
