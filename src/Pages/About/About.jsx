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
        <img src={sectionTagOpen} className={`flavor-tag-open section-tag-flavor-open flavor-tags-${this.props.toggleHide}`} alt="section-tag-flavor" />
        <div className="about-text">ABOUT ME</div>
        <h1 className="about-me-header"><span className="subtext">a little</span> About Me</h1>
        {/* <div className="indication-wrapper">
          <div></div>
          <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
        </div> */}
        <div className="about-me-section">
          <p className="about-me-page-intro"> Hello! I'm Julius. I engineer and develop applications and websites with a focus on web technologies.
          <br />
          <br />
          This website is where I publish my works; an expression of my creativity through design, code, and writing. This site will hold the bookmarks of my life in: projects, articles, and career history. While you're here, thank you for being a part of it.</p>
        </div>
      </div>
    )
  }
}