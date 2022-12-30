import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )
   return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1604342427523-189b17048839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
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
         {recentItem("reactjs")}
         {recentItem("programming")}
         {recentItem("softwareengineering")}
         {recentItem("design")}
         {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
