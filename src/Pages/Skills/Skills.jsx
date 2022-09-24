import React, { Component, useEffect } from 'react';
import './Skills.css';

export default class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "skills"
    };
  };

  render() {
    return(
      <div id="skills-component">
        <div className="skills-text">SKILLS</div>
        <h1><span className="subtext">a few of</span> My Skills</h1>
        <span className="skills-content-wrapper">
          <div className="skills-list-wrapper">
            <ul>
              <li>Frontend</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Backend</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL Frameworks</li>
            </ul>
          </div>
        </span>
      </div>
    )
  }
};