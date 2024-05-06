import React from "react";
import Chat from "./Chat";
import ActiveUsers from "./ActiveUsers";
import { socket } from "../../socket";

function ChatPanel() {


  return (
    <div className=" row ">
      <div className="col-9 mx-auto bg-warning  " style={{ borderRadius: 20 }}>
        <div className="d-flex justify-content-around">
          <Chat />
          <ActiveUsers />
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
