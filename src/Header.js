import React from "react";
import "./Header.css";

import PersonIcon from "@material-ui/icons/Person";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavigationIcon from "@material-ui/icons/Navigation";
import PanToolIcon from "@material-ui/icons/PanTool";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

function Header() {
  return (
    <>
      <div className="Header_main">
        <div className="header_icons">
          <div className="Navicon">
            <NavigationIcon />
          </div>

          <div className="panIcon">
            <PanToolIcon />
          </div>

          <div className="chatIcon">
            <ChatBubbleOutlineIcon />
          </div>
        </div>
        <div className="header_title">
          <h6>ZOCKET</h6>
        </div>
       <div className="NavEndicons">
       <div className="profileIcon">
          <AccountCircleIcon />
        </div>
        <div className="shareicon">
        <ScreenShareIcon/>
        </div>
       </div>
      </div>
    </>
  );
}

export default Header;
