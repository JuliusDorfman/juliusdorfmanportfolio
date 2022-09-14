import React, { Component } from 'react';
import './FullScreenSidebar.css';


export default class FullScreenSidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarState: 'visible'
    }
  }
  render() {
    const sidebarState = this.state.sidebarState;
    return( 
      <div id="FullScreenSidebar" className={`sidebar-${sidebarState}`}>
        <div id="FullScreenSidebar-head">
          <div className="initials-icon">
            <a href="/portfolio" className="icon-card-initials-wrapper" value="portfolio" onClick={this.handleClick}>
              <p className="icon-card-initials" value="portfolio">
                J
              </p>
              <p className="icon-card-initials" value="homepage">
                D
              </p>
            </a>
          </div>
          <div className="initials-name">
            Julius
          </div>  
          <p className="initials-subscript">Web Developer</p> 
        </div>
        <div id="fullScreenSidebar-links">
          <ul>
            <li value="about">About</li>
            <li value="skills">My Skills</li>
            <li value="work">Work</li>
            <li value="contact">Contact</li>
            {/* <li value="blog">Blog</li> */}
          </ul>
        </div>
      </div>
    )
  }
}
