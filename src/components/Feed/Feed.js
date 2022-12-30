import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";

function Feed() {

  const [posts, setPosts] = useState([])

  const sendPost = (e) => {
    e.preventDefault();
  }

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post/>
      ))}
      <Post
        name="Tasnim Ahmed Chowdhury"
        description="This is a test!"
        message="Wow this is worked"
      />
    </div>
  );
}

export default Feed;
