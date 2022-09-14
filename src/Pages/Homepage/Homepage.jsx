import React, { Component } from 'react';
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClass: 'nav-inactive',
      navigation: false,
      page: 'Homepage'
    };
  };

  render() {
    return(
      <div id="homepage-component"> 
      <div className="landing-nav-top">
        <button className="nav-inactive"></button>
      </div>
        <div className="landing-intro">
          <h1>
          J<span>ulius</span> D<span>orfman</span>
          <br/>
          <span>web developer</span>
          </h1>
          <p className="landing-flavor">
          Front End Developer
          </p>
          <button href="#page-rendered" className="contact-me">Contact Me</button>
        </div>
        <div className="indication-wrapper">
          {/* <div className="vertical-orientation-left">scroll</div> */}
          <div></div>
          <div className="vertical-orientation-right">scroll</div>
        </div>
      </div>
    )
  }
}