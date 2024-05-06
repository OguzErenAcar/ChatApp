import React, { useEffect, useState } from "react";
import { Users } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { Socket } from "../socket";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { currentUsers, setcurrentUsers } = Users();

  const Conn = () => {
    Socket.connect();
    console.log("connection");
    emit();
  };

  const emit = () => {
    const Info = sessionStorage.getItem("userInfo");
    Socket.emit("Info", Info);
  };

  useEffect(() => {
    Socket.disconnect();
    sessionStorage.clear();
    setcurrentUsers([]);

    console.log("disconnection", currentUsers);
  }, []);

  const userHandle = () => {
    if (username !== "") {
      const user = { username: username };
      setcurrentUsers(currentUsers.concat(user));
      sessionStorage.setItem("userInfo", JSON.stringify(user));
      Conn();
      navigate("/Chat");
    }
  };
  const handleKeyDown=(event)=>{
    if(event.keyCode === 13) {
      userHandle() 
}}
  return (
    <div className="bg-dark h-100 w-100 justify-content-center align-items-center d-flex">
      <div className="align-items-center d-flex justify-content-center h-75">
        <div className="">
          <div className="d-flex justify-content-center">
            <h1 className="text-warning " style={{ fontSize: 50 }}>
              Login
            </h1>
          </div>
          <div class="custom_input mt-5">
            <input
             onKeyDown={handleKeyDown}
              class="input"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              type="text"
              placeholder="Nickname"
            />
          </div>

          <div className="d-flex justify-content-center mt-5 ">
            <button className="btn btn-primary" style={{height:50,width:170}} onClick={() => userHandle()}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
