import './App.css';
import React,{useState} from "react";
import Header from "./components/Header";

function App() {
  const [num, setNum] = useState(1)

  // function inc(){
  //   setNum(num+1)
  // }

  // function dec(){
  //   setNum(num-1)
  // }

  function inc(n){
    setNum(num+n)
  }
  function dec(n){
    setNum(num-n)
  }
//two ways to define onlick events

  return (
    <div className="App">
      <Header />
      <div className='div'>
        <h1 className="num">{num}</h1>
        {/* <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button> */}
        <button onClick={()=>inc(2)} style={{backgroundColor:"green"}}>Increment</button>
        <button onClick={()=>dec(1)} style={{backgroundColor:"red"}}>Decrement</button>
      
      </div>
      
    </div>
  );
}

export default App;
