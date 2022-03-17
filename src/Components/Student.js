import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import Nav from './Nav';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Student(props) {
  const [stdInfo, setStdInfo] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editableData, setEditableData] = useState({});
  const id = useRef(null);
  const name = useRef(null);
  const subject = useRef(null);
  const marks = useRef(null);
  const [count, setCount] = useState(0);
  const history = useHistory();

  const {register, handleSubmit, formState:{errors}} = useForm();

  useEffect(()=> {
    setCount((count) => count + 1);
    id.current = "";
  },[stdInfo])

  const deleteRow=(row)=> {
    let index = stdInfo.findIndex(item => item.id === row.id)
    stdInfo.splice(index, 1)
    setStdInfo([...stdInfo])
  }
  
  const editRow=(row)=> {
    id.current = row.id; 
    name.current = row.name;
    subject.current = row.subject;
    marks.current = row.marks;
    setIsUpdate(true)
    setEditableData(row)
  }
  
  const formSubmit=formData=> {
    if(formData.id && formData.name && formData.subject && formData.marks && !isUpdate) {
      let arr=[];
      arr.push({id: formData.id, name: formData.name, subject: formData.subject, marks: formData.marks})
      setStdInfo([...stdInfo, {id: formData.id, name: formData.name, subject: formData.subject,
        marks: formData.marks}])
        id.current.value = "";
        // name.current = null;
        // subject.current = null;
        // marks.current = null;
    } else {
      setIsUpdate(false);
      let idx = stdInfo.findIndex(item => item.id === editableData.id)
      Object.assign(stdInfo[idx],{id: id.current.value});
      Object.assign(stdInfo[idx],{name: name.current.value});
      Object.assign(stdInfo[idx],{subject: subject.current.value});
      Object.assign(stdInfo[idx],{marks: marks.current.value});
      setStdInfo(stdInfo);
    }
  }
  
  const cancel=()=> {
    setIsUpdate(false);
    id.current.value = null;
    name.current.value = null;
    subject.current.value = null;
    marks.current.value = null;
  }
  
  return (
    <>
    <Nav/>
    <div>
      <div className='formClass'>
      {history.location.state && <p className="uname">Loggedin Username: <span>{history.location.state}</span></p>}
    <h2>Student Details</h2>
    {count && <p>Component Rendered {count} {count <= 1 && <span>time</span>} {count > 1 && <span>times</span>}</p>}

    <form onSubmit={handleSubmit(formSubmit)}>
    <p>
      <input disabled={isUpdate} type="number" ref={id} name='id' {...register('id',{required: true})}
      placeholder='Enter ID'/>
      {errors.id && <div className='error'>Please enter ID</div>}
    </p>
    <p>
      <input type="text" ref={name} name='name' {...register('name', {required: true})}
      placeholder='Enter name'/>
      {errors.name && <div className='error'>Please enter name</div>}
    </p>
    <p>
      <input type="text" ref={subject} name='subject' {...register('subject', {required: true})} 
      placeholder='Enter subject'/>
      {errors.subject && <div className='error'>Please enter subject</div>}
    </p>
    <p>
      <input type="number" ref={marks} name='marks' {...register('marks', {required: true})}
       placeholder='Enter marks'/>
      {errors.marks && <div className='error'>Please enter marks</div>}
    </p>
    <p style={{textAlign: "center"}}>
      { !isUpdate && <button className='formBtn' type='submit'>Submit</button>}
      { isUpdate && <button className='formBtn' type='submit'>Update</button>}
      { isUpdate && <button className='formBtn cnclBtn' onClick={cancel}>Cancel</button>}
    </p>
    </form>
    </div>

    <div>
    {stdInfo.length > 0 && 
      <table className='tableClass'>
      <thead>
      <tr style={{background:"rgb(201 223 255)"}}>
      <th>ID</th>
      <th>Name</th>
      <th>Subject</th>
      <th>Marks</th>
      {/* <th>Actions</th> */}
      <th>Actions</th>
      </tr>
    </thead>
  
    <tbody>
      {stdInfo.map(data=>(
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.subject}</td>
          <td>{data.marks}</td>
          {/* <td><button onClick={() => editRow(data)}>Edit</button></td> */}
          <td><button onClick={() => deleteRow(data)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>}
  </div>
  </div></>)
  }
    
  export default Student

