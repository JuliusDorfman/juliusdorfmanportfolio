import React from 'react';
import './About.css';
import pTagOpen from '../../Assets/p-tag-open-2.png';
import pTagClose from '../../Assets/p-tag-close-2.png';
import h1TagOpen from '../../Assets/h1-tag-open-2.png';
import h1TagClose from '../../Assets/h1-tag-close-2.png';
import sectionTagOpen from '../../Assets/section-tag-open-2.png';
const TagCloud = require('TagCloud');

const container = '.skills-cloud';
const skillsList = [
  'ReactJS', 'Javascript', 'jQuery', 'SQL', 
  'Node.js', 'HTML', 'Agile', 'JIRA', 'JSON', 
  'SASS', 'Bootstrap', 'npm', 'CSS', 'REST', 'GIT', 
  '_lodash', 'AWS: EC2', 'AWS: S3'
];

const options = {
  radius: 150,
  maxSpeed: 'normal',
  initSpeed: 'slow',
  direction: 200,
  keep: true,
  containerClass: 'skills-bubble',
  useContainerInlineStyles: true,
  useItemInlineStyles: true
};


export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "about",
      skillsFormation: 'bubble',
      skillsList: 'hide'
    };
  }

  componentDidMount() {
    TagCloud(container, skillsList, options);
  }


  // toggleSkillsFormation = (e) => {
  //   this.setState({currentPage: 'skills'}, ()=> {
  //     this.props.handleCurrentPage('skills');
  //   });
  // }

  render(){
    const skillsFormation = this.state.skillsFormation;
    const skillsList = this.state.skillsList;
    return(
      <div id="about-component">
        <img src={sectionTagOpen} className={`flavor-tag-open section-tag-flavor-open flavor-tags-${this.props.toggleHide}`} alt="section-tag-flavor" />
        <div className="about-text">ABOUT ME</div>
        <h1 className="about-me-header"><span className="subtext">a little</span> About Me</h1>
        {/* <div className="indication-wrapper">
          <div></div>
          <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
        </div> */}
        <div className="page-split">
          <div className="about-me-section">
            <p className="about-me-page-intro"> I'm a Front-End Developer located in the United States. I have serious passion for creating intuitive, dynamic, and aesthetically pleasing user experiences.
            <br />
            <br />
            This website is where I publish my works; an expression of my creativity through design, code, and writing. While you're here, thanks for being a part of it.</p>
          </div>
          <div className="about-me-animation-wrapper">
            <div className={`cloud-wrapper-${skillsFormation}`}>
              <div className={`skills-cloud formation-${skillsFormation}`}>
                {/* Skills Cloud Content*/}
              </div> 
              {/* <div className={`list-skills-head-${skillsList}`}>
                SKILLS
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// className={`list-skills-items skills-${skillsList}`}