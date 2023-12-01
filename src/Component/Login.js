import React, { useEffect, useState } from 'react'
import img from "../tenor.gif"
import Serviceprod from "../Serviceclass/serviceprod"
import { useNavigate } from 'react-router-dom';
 const Login = () => {

const navigate=useNavigate();
const[admin,setadmin]=useState({username:"",password:""})

  
function sendadmindet(admin)
{

   navigate("/home");
// Serviceprod.validatelogin(admin.username)
//     .then((result)=>
//     {
      
//     })
}
  
function handlevent(event)
{
    let{name,value}=event.target;
    setadmin({...admin,[name]:value});
   console.log(admin.username);
}  
  return (
    <div className='d-flex'>
 <img src={img} ></img>
  <div class="mb-3">
    <label for="kd" class="form-label">LoginID</label>
    <input type="email" name="username" class="form-control" id="kd"  onKeyUp={handlevent} aria-describedby="Please Enter Loginid"/>
   </div>
  <div class="mb-3">
    <label for="kd1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" onKeyUp={handlevent} id="kd1"/>
  
 

  <button type="button" class="btn btn-primary" onClick={sendadmindet}>Submit</button>

    </div>
    </div>
  )
}

export default Login;