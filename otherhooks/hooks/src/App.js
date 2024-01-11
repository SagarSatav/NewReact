import { useReducer, useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
// import useFetch from './components/useFetch';

import React,{useEffect} from 'react'
import {Bars,TailSpin,ThreeCircles} from 'react-loader-spinner'
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//writing custom hooks example useFetch()

// const reducer = (state, action) => {
//   if (action.type == "INC") {
//     return state + 2;
//   } else if (action.type == "DEC") {
//     return state - 2;

//   } else if (action.type == "MUL") {
//     return state * 2;
//   }
//   return state;
// }
//rect timer,tostify,loader

function App() {

  //-----------------------------------------------------------------

  // </React.StrictMode>  ==> because of it useeffect render two time in this application

  //react loader and tostifyy demo
    const[data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    
    useEffect(()=>{
        setLoading(true);
        async function getData(){
            const call=await fetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001");
            const res=await call.json();
            setData(res);
            setLoading(false);
            toast.success("successfully fetched data")
        }
        getData()
    },[])
  //---------------------------------------------------------------------
  // const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001")

  // const [state, dispatch] = useReducer(reducer, 0) //0= initial state

  //--------------------------------------------------------------
  //usememo==do value memorised when to use a perticular function
  //useCallback  function memorised similar useMemo to avoid slow application ,multiple calling perticular fnction avoid

  //memo --> props same then it can not render again

  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('');

  // const expensiveCalculator=(num)=>{
  //   console.log("calculating")
  //   for (let i=0;i<10000000000;i++){ }
  //   return num;
  // }
  // const calculation=useMemo(()=>{
  //   expensiveCalculator(count)
  // },[name]);

  //------------------------------------------------------------------


  return (
    <div>
      {/* <div className="App">
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
        <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>

      </div> */}

      <div>
        <Header />

        {/* {

          
          data.map((e, i) => {
            return <h2 key={i}>{e.firstName}</h2>

          })
        } */}
      </div>
      {/* <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>count:{count}</h1>

        <input onChange={(e) => setName(e.target.value)} />
        <h1>name:{name}</h1>
      </div> */}
      <ToastContainer />
      <div >
        {
          loading?
          <div className='loader'><ThreeCircles height={100} /></div>
          :

          data.map((e, i) => {
            return <h2 key={i}>{e.firstName}</h2>

          })
        }
      </div>
    </div>
  );
}

export default App;
