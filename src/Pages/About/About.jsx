import React from 'react';
import './About.css';
import pTagOpen from '../../Assets/p-tag-open-2.png';
import pTagClose from '../../Assets/p-tag-close-2.png';
import h1TagOpen from '../../Assets/h1-tag-open-2.png';
import h1TagClose from '../../Assets/h1-tag-close-2.png';
import sectionTagOpen from '../../Assets/section-tag-open-2.png';

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
          <img className={`flavor-tag-open html-tag-open flavor-tags-${this.props.toggleHide}`} src={sectionTagOpen} alt="section-tag-flavor"/>
        <h1 className="about-me-header"><span className="subtext">a little</span> About Me</h1>
        <div className="indication-wrapper">
          <div></div>
          <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
        </div>
      </div>
    )
  }
}