import { useRef, useState } from 'react';
import { usePrev } from './hooks/use-prev';
import './App.css'
import { useFetch } from './hooks/useFetch';
/*
function App() {
  const [currentPost, setCurrentPost] = React.useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);


  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}*/

/*
function App(){
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  return(
    <>
      <p>{state}</p>
      <button onClick={() =>{
        setState((curr) => curr +1);
      } }>Click me</button>
      <p>The previous value was {prev}</p>
    </>
  )
}
*/
/*
// 1 use case of debounce amazon database wala hit
function useDebounce(originalFn) {
  const currentClock = useRef();
  
  const fn = () =>{
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn , 200);
  }
  
  return fn
}

function App() {
  function sendDataToBAckend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBAckend);

  return (
    <>
      <input type='text' onChange={debouncedFn}></input>
    </>
  )
}*/

function App(){
const [inputVal , setInputVal] = useState("");
const debouncedValue = useDebounce(inputVal,200);

function change(e){
  setInputVal(e.target.value);
}

useEffect(()=>{
  //expensive operation 
  //fetch
  console.log("Expensive operation")
},[debouncedValue])

  return (
    <>
      <input type='text' onChange={change}></input>
    </>
  )
}
export default App
