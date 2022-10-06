import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";


const Sidebar = () => {


  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://avatars.dicebear.com/api/avataaars/hero.svg?background=%230000ff"/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
          <Chat />
          </IconButton>

          <IconButton>
          <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
        <SearchOutlined/>
        <input placeholder=" Search" type="text" />
        </div>
        </div>

      <div className="sidebar_chats">
        <SidebarChat addNewChat/>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />


   

        </div>
    </div>
  );
};

export default Sidebar;
