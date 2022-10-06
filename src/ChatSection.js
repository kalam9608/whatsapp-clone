import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./chat.css";

const ChatSection = () => {
  const [input, setInput] = useState("")
  const sendmessage = (e) => {
    e.preventDefault();
    console.log("clik" ,input);
    setInput("")
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://avatars.dicebear.com/api/avataaars/heros.svg?background=%230000ff"/>
        <div className="chat_headerInfo">
          <h3>Name</h3>
          <p>last seen...</p>
        </div>

        <div className="chat_headerRight">
          <Search />
          <AttachFile />
          <MoreVert />
        </div>
      </div>

      <div className="chat_body">
      <p className={`chat_message`}>
          <span className="chatName">Ramesh</span>
           hy this is Ramesh
          <span className="chat_time">3:22 PM</span>
        </p>
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chatName">kalam</span>
           hy this is kalam
          <span className="chat_time">3:22 PM</span>
        </p>
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chatName">kalam</span>
           how arue dude...?
          <span className="chat_time">3:23 PM</span>
        </p>

        <p className={`chat_message`}>
          <span className="chatName">Ramesh</span>
           i'm fine and you....?
          <span className="chat_time">3:22 PM</span>
        </p>
      </div>


      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input  value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button type="submit" onClick={sendmessage}>
            Send meassage
          </button>
        </form>
        <Mic />
      </div>
      


    </div>
  );
};

export default ChatSection;
