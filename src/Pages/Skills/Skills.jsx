import React, { Component, useEffect } from 'react';
import './Skills.css';
const TagCloud = require('TagCloud');

 
const container = '.skills-cloud';
const skillsList = [
  'ReactJS', 'Javascript', 'jQuery', 'SQL', 
  'Node.js', 'HTML', 'Agile Developement', 'JIRA'
];
const options = {
  radius: 200,
  maxSpeed: 'normal',
  initSpeed: 'slow',
  direction: 200,
  keep: true,
  containerClass: 'skills-bubble',
  useContainerInlineStyles: true,
  useItemInlineStyles: true
};

export default class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "skills",
      skillsFormation: 'bubble',
      skillsList: 'hide'
    };
  };

  componentDidMount() {
    TagCloud(container, skillsList, options);
  }

  toggleSkillsFormation = (e) => {
    if (this.state.skillsFormation === 'bubble') { 
      this.setState({skillsFormation: 'list'}) ;
      this.setState({skillsList: 'show'});
    } 
    else {
      this.setState({skillsFormation: 'bubble'});
      this.setState({skillsList: 'hide'});
    }

    
  }

  render() {
    const skillsFormation = this.state.skillsFormation;
    const skillsList = this.state.skillsList;
    return(
      <div id="skills-component">
        <div className="skills-text">SKILLS</div>
        <h1><span className="subtext">a few of</span> My Skills</h1>
        <span className="skills-content-wrapper" onClick={(e)=> {this.toggleSkillsFormation(e)}}>
          <div className={`cloud-wrapper-${skillsFormation}`}>
            <div className={`skills-cloud formation-${skillsFormation}`}>
              {/* Skills Cloud Content*/}
            </div> 
            <div className={`list-skills-head-${skillsList}`}>
              SKILLS
            </div> 
          </div>
          <div className="skills-list-wrapper">
            <ul className={`list-skills-items skills-${skillsList}`}>
              <li>Frontend</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>SQL</li>
              <li>Node.js</li>
            </ul>
            <ul className={`list-skills-items skills-${skillsList}`}>
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