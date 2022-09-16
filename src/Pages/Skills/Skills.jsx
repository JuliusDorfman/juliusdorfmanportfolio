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
        Skills Page
      </div>
    )
  }
};