import React, { useEffect, useState } from "react";
import ActiveUserİtem from "./ActiveUserİtem";
import { Socket } from "../../socket";
import { Users } from '../../Context/LoginContext'

function ActiveUsers() {

   const {currentUsers,setcurrentUsers} =Users() 
  //const [currentUsers,setcurrentUsers]=useState([JSON.parse(sessionStorage.getItem("userInfo"))])
  useEffect(()=>{
    function onEvent(value){  
      setcurrentUsers(prevUsers => prevUsers.concat(value)); 
    }
    Socket.on("Info",onEvent) 
    return()=>{
      Socket.off("Info",onEvent)
    }
  },[])  

  function onEventDis(value){
    const list = value.map((i)=>i) 

    setcurrentUsers(prevUsers => prevUsers.filter(i => i.username !== list[0].username));

  }
  useEffect(()=>{
    Socket.on("InfoDiscon",onEventDis) 
    return()=>{
      Socket.off("InfoDiscon",onEventDis)
    }
  })

 
  return (
    <div className=" kisipanel pt-4 " style={{width:"25%"}}>
      <h6 className="text-center" style={{fontSize:20,marginBottom:20}} >Users</h6>
      <ul className="list-group ">
        <li className="list-group-item ">
        {currentUsers.map((item,index)=>(
          <ActiveUserİtem key={index} {...item}/>
        ))}
        </li>
      </ul>
      <button onClick={()=>{console.log(currentUsers)}}>console</button>
    </div>
  );
}

export default ActiveUsers;
