import './App.css';
import { useState, useRef, useEffect } from 'react';
import { createContext } from 'react';
import CompA from './components/CompA';
// import CompC from './components/CompC';
const AppData = createContext()



function App() {

  const [data, setData] = useState("Geminus");
  const [name, setName] = useState({ name: "sagar", addr: "pune" })

  const [input, setInput] = useState("");

  //----------------------------------------------------------
  // const [counter,setCounter]=useState(0);\


  //for current valuestate
  // const counter = useRef(0);
  // useEffect(() => {
  //   // setCounter =(counter+1)
  //   counter.current = counter.current + 1
  // })
//-----------------------------------------------------------




  //for previous state
  // const preState = useRef("")
  // useEffect(() => {
  //   // setCounter =(counter+1)
  //   preState.current = input
  // }, [input])
  //-----------------------------------------------------------

  //directly accses the DOM elements

  const inputField=useRef();

  const formHandler = (e) => {
    setInput(e.target.value);

  }

  const clickHandler=()=>{
    inputField.current.focus();
    inputField.current.value="sagar";
    console.log(inputField.current.value)
    inputField.current.style.border="2px solid red"

  }

  return (
    <div className="App">
      {/* <AppData.Provider value={{data}}> */}
      <CompA data={data}
        name={name} />


      {/* </AppData.Provider> */}

      <input ref={inputField} value={input} onChange={formHandler} />
      {/* <h4>Application ha been render {counter.current} times</h4> */}
      {/* <h4>Application ha previous render {preState.current} </h4> */}

      <button onClick={clickHandler}>click me</button>
    </div>
  );
}

export default App;
export { AppData };
