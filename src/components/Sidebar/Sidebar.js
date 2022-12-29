import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar />
        <h2>Tasnim Ahmed Chowdhury</h2>
        <h4>tasnim.achy96@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,423</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="sidebar_statNumber">2,373</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
