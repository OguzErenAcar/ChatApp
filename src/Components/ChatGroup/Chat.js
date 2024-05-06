import React, { useEffect ,useState,useRef} from 'react'
 import { Socket } from "../../socket";
function Chat() {
 
  const[inputText,setinputText]=useState("")
  const[messages,setMessages]=useState([])
  
  var objDiv = useRef(null);

  function getMessage(value){
    console.log(value)
   setMessages(messages.concat(value))
  }  

  useEffect(()=>{
    Socket.on("message",getMessage)
    return()=>{
      Socket.off("message",getMessage)
    }
  })

  function sendMessage(value){
    if(value!==""){
      const user =JSON.parse(sessionStorage.getItem("userInfo"))
      user.message=value
      Socket.emit("message",user)
      setinputText("")
    }

  }  

  const handleKeyDown=(event)=>{
    if(event.keyCode === 13) {
      sendMessage(inputText) 
}
  } 

  useEffect(()=>{
    objDiv.current.scrollTop = objDiv.current.scrollHeight;
  })


  return (
    <div className="chatpanel rounded-1 " style={{ height: 700,width:"70%" }}>
  <div id="areacontainer" >
    <div id="chatarea" ref={objDiv}>
     {(messages.map((item,i)=>( 
      <div>
        <h6>{item.username!==undefined&&item.username+":"}</h6>
        <p>{item.message}</p>
      </div>
    
    ))
    )}

  </div>
   </div>
      <div className="d-flex  align-items-center" style={{ height:120 }}>
        <input style={{height:30}}
          type="text"
          value={inputText}
          onKeyDown={handleKeyDown}
          onChange={(e)=>{setinputText(e.target.value)}}
          className="w-75 rounded-2"
          placeholder="Mesajınızı yazınız..."
        />
        <button
          onClick={()=>sendMessage(inputText)}
          type="button"
          className="btn btn-success ms-3" 
          style={{ width: 80 }}>
          <h6 className="m-auto">Submit</h6>
        </button>
      </div>
  </div>
  )
}

export default Chat
