// import React,{useState,useEffect} from 'react'
// import {Bars,TailSpin,ThreeCircles} from 'react-loader-spinner'
// import {ToastContainer,toast} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


// const useFetch = (url) => {
//     const[data,setData]=useState([]);
//     const [loading,setLoading]=useState(false);
    
//     useEffect(()=>{
//         setLoading(true);
//         async function getData(){
//             const call=await fetch(url);
//             const res=await call.json();
//             setData(res);
//             setLoading(false);
//             toast.success("successfully fetched data")
//         }
//         getData()
//     },[])

//   return [data];
 
// }

// export default useFetch