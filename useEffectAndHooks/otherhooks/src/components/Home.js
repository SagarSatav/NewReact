import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'



const Home=()=>{
    
    const [state,setState]=useState(1);
    const [data,setData]=useState([]);

    useEffect (()=>{

        async function getData(){
          try{
            const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const res = await get.json();
            setData(res)
            console.log(res)

          }catch(error){
            console.error('Error fetching data:', error);
          }

    }
        getData();
        document.title=`(${state}) Employees`;
    },[state])
    return(
        <div>
        <button onClick={()=>{setState(state+1)}} style={{backgroundColor:"yellow"}}><h1>Add</h1> {state}</button>
        {
          data.map((element,index)=>{
            return(
              <Link to={`/app/${element.id}`}>
             <div className="data" key={index}>
                <h3>{element.id}</h3>
                <h3>{element.firstName}</h3>
                <h3>{element.lastName}</h3>
                <h3>{element.email}</h3>
              </div>
              </Link> 
            )

          })
        } 
        
      </div>
    );
}
export default Home;