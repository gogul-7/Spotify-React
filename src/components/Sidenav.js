import React from "react";
import "./Sidenav.css";
import { Icon } from "@iconify/react";

function Sidenav() {
  return (
    <div className="main-body">
      <div className="logo">
        <img
          className="logo-img"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="no-img"
        />
      </div>
      <div>
        <ul className="navItem1">
          <li className="item">
            <Icon
              icon="material-symbols:home-rounded"
              color="white"
              width={30}
            />
            <p className="itemName">Home</p>
          </li>
          <li className="item">
            <Icon icon="carbon:search" color="white" width={27} />
            <p className="itemName">Search</p>
          </li>
          <li className="item">
            <Icon icon="fluent:library-20-regular" color="white" width={27} />
            <p className="itemName">Your Library</p>
          </li>
        </ul>
        <ul className="navItem2">
          <li className="item">
            <Icon
              icon="material-symbols:add-box-rounded"
              color="white"
              width={30}
            />
            <p className="itemName">Create Playlist</p>
          </li>
          <li className="item">
            <Icon
              icon="solar:chat-square-like-bold-duotone"
              color="#b06cf0"
              width={27}
            />
            <p className="itemName">Liked Songs</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
