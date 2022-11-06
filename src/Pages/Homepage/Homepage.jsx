/* eslint-disable react/prop-types */
// eslint-disable-next-line no-undef
import React, { Component } from 'react';
// import About from '../../Pages/About';
// import Skills from '../../Pages/Skills';
import Work from '../../Pages/Work';
import Expertise from '../Expertise/Expertise';
import Experience from '../Experience/Experience';
import Accolades from '../Accolades/Accolades';
// import Contact from '../../Pages/Contact';
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
      page: 'homepage',
    };
  }


  render() {
    return (
      <div id="homepage-component">
        <div className="landing-page-wrapper">
          <img className={`flavor-tag-open html-tag-open flavor-tags-${this.props.toggleHide}`} src={htmlTag} alt="flavor-tag-html" />
          <div className="landing-nav-top">
            <button className="nav-inactive"></button>
          </div>
          <div className="landing-intro">
            <img src={h1TagOpen} alt="h1-tag-flourish" className={`flavor-tag-open h1-flavor-open flavor-tags-${this.props.toggleHide}`} />
            <h1>
              <span className="bolded">J</span>ulius <span className="bolded">D</span>orfman
              <br />
              <span className="landing-flavor">web developer</span>
            </h1>
            <img src={h1TagClose} alt="h1-tag-flourish" className={`flavor-tag-close h1-flavor-close flavor-tags-${this.props.toggleHide}`} />
            <p className="landing-title">
              <img src={pTagOpen} alt="p-tag-flourish" className={`flavor-tag-open flavor-tags-${this.props.toggleHide}`} />
              <br />
              Front End Developer / Software Engineer
              <br />
              <img src={pTagClose} alt="p-tag-flourish" className={`flavor-tag-close flavor-tags-${this.props.toggleHide}`} />
            </p>
            <div className="button-wrapper">
              <button href="https://www.linkedin.com/in/juliusgdorfman/"
                target="_blank" rel="noreferrer"
                className="contact-me">
                <a href="https://www.linkedin.com/in/juliusgdorfman/"
                  target="_blank" rel="noreferrer">
                  Contact Me
                </a>
                <span className="glow-wrapper">
                  <span className="glow" />
                </span>
              </button>
            </div>
            <div className="indication-wrapper">
              <div></div>
              <div href={'#about-component'} className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
              <img src={sectionTagClose} className={`flavor-tag-close section-tag-flavor-close flavor-tags-${this.props.toggleHide}`} alt="section-tag-flavor" />
            </div>
          </div>
          <div className="homepage-text">
            HELLO
            <br />
            WORLD
          </div>
        </div>
        <div className="background-spacer"></div>
        <div className="homepage-components-wrapper">
          <Expertise />
          {/* <About /> */}
          {/* <Skills /> */}
          <Work handleCurrentPage={this.props.handleCurrentPage} />
          {/* <Contact /> */}
          <Experience />
          <Accolades />
        </div>
        {/* <footer className="bottom-space"></footer> */}
      </div>
    );
  }
}