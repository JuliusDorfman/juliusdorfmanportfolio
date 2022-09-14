import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
render() {
  return (
    <div className={`navbar-component`}>
      <div className="nav-header">
        <div className="nav-icon">
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
          <div className="initials-subscript">
            <span>J</span>ulius <span>D</span>orfman
          </div> 
        </div>
      </div>
      <div className="navigation-links-wrapper">
      <ul className="navigation-links">
        <li value="home">Home</li>
        <li value="about">About</li>
        <li value="skills">My Skills</li>
        <li value="work">Work</li>
        <li value="contact">Contact</li>
        {/* <li value="blog">Blog</li> */}
      </ul>  
      </div>
      <div className="nav-socials-wrapper">
        <ul className="nav-socials-links">
          <li>Icon 1</li>
          <li>Icon 2</li>
          <li>Icon 3</li>
        </ul>
      </div>
    </div> 
    )
  }
}
