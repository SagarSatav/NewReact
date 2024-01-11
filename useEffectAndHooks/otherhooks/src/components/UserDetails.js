import React,{ useState,useEffect } from "react"
import {useParams} from 'react-router-dom'


export const UserDetails = () => {
    const {userId}=useParams();
    
    const [data,setData]=useState({});

    useEffect (()=>{

        async function getData(){
          try{
            const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
            const res = await get.json();
            setData(res[0])
            console.log(res[0])

          }catch(error){
            console.log("error fetching data :",error)
          }

    }
        getData();
        
    },[])
  return (
    <div className="user">
        <h3>id : {data.id}</h3>
        <img src={data.imageUrl} alt={data.firstName}></img>
        <h3>FirstName : {data.firstName}</h3>
        <h3>LastName : {data.lastName}</h3>
        <h3>email : {data.email}</h3>
        <h3>Number : {data.contactNumber}</h3>
        <h3>age : {data.age}</h3>
        <h3>DOB : {data.dob}</h3>
    </div>
  )
}
