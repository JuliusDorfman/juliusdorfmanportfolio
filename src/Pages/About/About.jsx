import React from 'react';
import './About.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "about"
    };
  }
  render(){
    return(
      <div id="about-component">
        About Page
      </div>
    )
  }
}