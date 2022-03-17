import React, { useRef, useState, memo } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';

function Project(props) {

    // constructor(props) {
    //   super(props)
    //     this.state={
    //       id:this.props.id,
    //       name:this.props.name,
    //       username:this.props.username,
    //       email:this.props.email,
    //       basic:this.props.basic,
    //       hra:this.props.hra,
    //       isShowUpdate: false
    //     }
    // }

    const pdata={id: props.id,
                name: props.name,
                username: props.username,
                email: props.email,
                basic: props.basic,
                hra: props.hra
    }

    const [data, setData] = useState(pdata)
    const basic = useRef(null)
    const hra = useRef(null)
    const [isShowUpdate, setIsShowUpdate] = useState(false)

    const editPLocation=()=>{
      setIsShowUpdate(true)
    }
  
    const updateSalary=()=>{
      setIsShowUpdate(false)
      let sal = parseInt(basic.current.value)+parseInt(hra.current.value);
      props.updatedSalary(sal);
    }
  
    return (<div>
      <h1>Project Details:</h1>
      <p>Project Name: <b>{props.p_name}</b></p>
      <p>Project Location: <b>{props.p_location}</b></p>
      <p>Basic Salary: <input disabled={isShowUpdate === false ? true : false} type="number" ref={basic} 
        defaultValue={props.basic}/></p>
      <p>HRA: <input disabled={isShowUpdate === false ? true : false} type="number" ref={hra} 
        defaultValue={props.hra}/></p>
  
      {!isShowUpdate && <button onClick={editPLocation}>Edit Salary</button>}
      {isShowUpdate && <button onClick={updateSalary}>Update Salary</button>}
    </div>
    )
  }

  export default memo(Project)