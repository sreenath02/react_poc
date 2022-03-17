import React, { useState, memo, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import Project from './Project';
import Nav from './Nav';

const UserContext = createContext();

function Emp() {
  const empInfo=
    {
      id: 101,
      name: "Sreenath",
      location: "India",
      email: "sreenath@gmail.com",
      salary: 10000,
      p_name: "HTC",
      p_location: "India",
      basic: 5000,
      hra: 5000
    }

    const [empData, setEmpData] = useState(empInfo)

    const updatedSal=(sal)=>{
      setEmpData(previousState => {
        return { ...previousState, salary: sal }
      });
    }
  
    return (<>
      <Nav/>
      <div className='mrgnDiv'>
      <UserContext.Provider value={empData.email}>
      <h1>Employee Details:</h1>
      <p>Employee Id: <b>{empData.id}</b></p>
      <p>Employee Name: <b>{empData.name}</b></p>
      <Email/>
      {/* <p>Employee Email: <b>{empData.email}</b></p> */}
      <p>Employee Salary: <b>{empData.salary}</b></p>
      <Project p_name={empInfo.p_name} p_location={empInfo.p_location} basic={empInfo.basic} 
        hra={empInfo.hra} updatedSalary={updatedSal}></Project>
        </UserContext.Provider>
        </div>
    </>)
  }

  function Email() {
    const user = useContext(UserContext);

    return(
      <p>Employee Email: <b>{user}</b></p>
    )
  }

  export default memo(Emp)