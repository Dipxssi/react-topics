import './App.css'
import React from 'react'

const CountContext = React.createContext();

function CountContextProvider({children}){
  const [count, setCount] = React.useState(0);
  return <CountContext.Provider value={{count,setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent(){
  return(
   <CountContextProvider>
     <Increase />
     <Decrease />
     <Value/>
   </CountContextProvider>
  )
}

function Increase(){
  const {count,setCount} = React.useContext(CountContext);
  function inc(){
    setCount(count => count+1);
  }
  return <button onClick={inc}>Increase</button>
}

function Decrease(){
   const {count,setCount} = React.useContext(CountContext);
  function dec(){
    setCount(count => count-1);
  }
  return <button onClick={dec}>Decrease</button>
}

function Value(){
   const {count} = React.useContext(CountContext);
  return <p>Count : {count}</p>
}

export default function App() {

  return (
    <>
      <Parent/>
    </>
  )
}

