import React, { Component } from "react";
import LogoBar from "LogoBar";
import { LeftSideMenu } from "Menu";

class SideBar extends Component {
  render() {  
    return (
      <aside className="nav-aside">
        <LogoBar />        
        <LeftSideMenu />       
      </aside>
    );
  }
}

export default SideBar;
