import React, { Component, useEffect } from 'react';
import './Skills.css';

export default class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "skills",
      yearsPassed: 0
    };

  };


  componentDidMount() {
    const startYear = 2017;
    const getDate = new Date();
    const currentYear = getDate.getFullYear();
    const yearsPassed = currentYear-startYear;
    this.setState({yearsPassed: yearsPassed});
  }
 
  render() {
 
    return(
      <div id="skills-component">
        <div className="skills-text">SKILLS</div>
        <h1><span className="subtext">a few of</span> My Skills</h1>
        <span className="skills-content-wrapper">
          <p>Since before the start of my professional career in tech, {this.state.yearsPassed} years ago, I had been building websites. Since then, I've developed software for large companies, consulted for start-ups, and been to floor shows and spoken directly with product users.</p>
          <p>The main area of my expertise is front-end development, HTML, CSS, JS, React, building web apps, plugins, and features.</p>
          <p>I also have full-stack developer experience with popular CMS like WordPress and many other proprietary systems.</p>
          <div className="skills-list-wrapper">
            <ul>
              <li>Frontend</li>
            </ul>
            <ul>
              <li>Backend</li>
            </ul>
            <ul>
              <li>ReactJS</li>
            </ul>
          </div>
        </span>
      </div>
    )
  }
};