import React, { Component } from 'react';
import About from '../../Pages/About';
import Skills from '../../Pages/Skills';
import Work from '../../Pages/Work';
import Contact from '../../Pages/Contact';
import pTagOpen from '../../Assets/p-tag-open-2.png';
import pTagClose from '../../Assets/p-tag-close-2.png';
import h1TagOpen from '../../Assets/h1-tag-open-2.png';
import h1TagClose from '../../Assets/h1-tag-close-2.png';
import htmlTag from '../../Assets/html-tag-open-2.png';
import sectionTagClose from '../../Assets/section-tag-close-2.png';
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClass: 'nav-inactive',
      navigation: false,
      page: 'homepage'
    };
  };

  render() {
    return(
      <div id="homepage-component"> 
        <div className="landing-page-wrapper">
          <img className={`flavor-tag-open html-tag-open flavor-tags-${this.props.toggleHide}`} src={htmlTag} alt="flavor-tag-html"/>
          <div className="landing-nav-top">
            <button className="nav-inactive"></button>
          </div>
          <div className="landing-intro">
            <img src={h1TagOpen} alt="h1-tag-flourish" className={`flavor-tag-open h1-flavor-open flavor-tags-${this.props.toggleHide}`}/>
            <h1>
              J<span>ulius</span> D<span>orfman</span>
              <br/>
              <span className="landing-flavor">web developer</span>
            </h1>
            <img src={h1TagClose} alt="h1-tag-flourish" className={`flavor-tag-close h1-flavor-close flavor-tags-${this.props.toggleHide}`}/>
            <p className="landing-title">
            <img src={pTagOpen} alt="p-tag-flourish" className={`flavor-tag-open flavor-tags-${this.props.toggleHide}`}/>
            <br/>
              Front End Developer / Software Engineer
            <br/>
            <img src={pTagClose} alt="p-tag-flourish" className={`flavor-tag-close flavor-tags-${this.props.toggleHide}`}/>
            </p>
            <button href="#page-rendered" className="contact-me">Contact Me</button>
          </div>
          <div className="indication-wrapper">
            <div></div>
            <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
            <img src={sectionTagClose} className={`flavor-tag-close section-tag-flavor-close flavor-tags-${this.props.toggleHide}`} alt="section-tag-flavor" />
          </div>
        </div>
        <div className="homepage-components-wrapper">
          <About />
          <Skills />
          <Work />
          {/* <Contact /> */}
          
        </div>
      </div>  
    )
  }
}