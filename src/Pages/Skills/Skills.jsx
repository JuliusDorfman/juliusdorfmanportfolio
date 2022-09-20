import React, { Component } from 'react';
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
        <h1><span className="subtext">a few of</span> My Skills</h1>
        <div className="indication-wrapper">
          <div></div>
          <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
        </div>
      </div>
    )
  }
};