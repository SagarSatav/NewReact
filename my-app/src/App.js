import { useState, useEffect } from "react";
// import sample from "./Components/sample1.json";
import "./App.css";
import FormData from "./Components/FormData";
import Form from "./Components/Form";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const get = await fetch(
          `https://hub.dummyapis.com/employee?noofRecords=${5}&idStarts=1001`
        );
        const res = await get.json();
        setData(res);
        console.log(res);
      } catch (error) {
        console.log("Error fetching Data", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="App">
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Id</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>EMAIL</th>
            <th>CONTACT NUMBER</th>
            <th>AGE</th>
            <th>DOB</th>
            <th>SALARY</th>
            <th>ADDRESS</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {Data.map((ele, index) => {
            return (
              <tr key={index} className="tr">
                <td>{ele.id}</td>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.email}</td>
                <td>{ele.contactNumber}</td>
                <td>{ele.age}</td>
                <td>{ele.dob}</td>
                <td>{ele.salary}</td>
                <td>{ele.address}</td>
                <td>
                  <img src={ele.imageUrl} alt={ele.firstName}></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="forma">
      <Router>
          <Routes>
            <Route path="/" element={<Form />}/>
            <Route path="form" element={<FormData />}/>
          </Routes>
        </Router>
        {/* <Form /> */}
        
      </div>
    </div>
  );
}

export default App;
