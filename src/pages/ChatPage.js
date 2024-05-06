import React, { memo, useMemo } from "react";
import ChatPanel from "../Components/ChatGroup/ChatPanel";

function ChatPage() {
 
  return (
    <div className=" bg-dark h-100">
      <div className=" w-100 h-100 d-flex  justify-content-center ">
        <div className=" container w-75 h-75">
        <div className=" container-fluid text-warning d-flex justify-content-center  align-items-center" style={{height:150}}>
          <h3 style={{fontSize:30}}>Chat App</h3>
        </div>
        <ChatPanel/>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
