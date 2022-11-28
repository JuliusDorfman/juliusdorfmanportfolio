/* eslint-disable react/prop-types */
// eslint-disable-next-line no-undef
import React, { Component, createRef } from 'react';
// import TweenMax from "gsap";
// import About from '../../Pages/About';
// import Skills from '../../Pages/Skills';
import Work from '../../Pages/Work';
import Expertise from '../Expertise/Expertise';
import Experience from '../Experience/Experience';
import Accolades from '../Accolades/Accolades';
import FixedLinks from '../../Components/FixedLinks/FixedLinks.tsx';
import './Homepage.scss';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClass: 'nav-inactive',
      navigation: false,
      page: 'homepage',
      FixedLinksVisibility: true
    };
  }



  handleNearBottom = () => {
    let accolades = document.getElementById('accolades-component');
    const viewPort = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + window.innerHeight,
    }

    if (accolades.offsetTop < viewPort.bottom - 500 && accolades.offsetTop > viewPort.top - 100) {
      this.setState({ FixedLinksVisibility: false });
    } else {
      this.setState({ FixedLinksVisibility: true });
    }

  }



  componentDidMount = () => {
    window.addEventListener('scroll', this.handleNearBottom);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleNearBottom);
  }

 

  render() {
    let FixedLinksVisibility = this.state.FixedLinksVisibility;

    return (
      <div id="homepage-component">
        <FixedLinks fixedlinksvisibility={FixedLinksVisibility}/>
        {/* <canvas id="mouse-trail">

        </canvas> */}
        <div className="landing-page-wrapper">
          {/* <img className={`flavor-tag-open html-tag-open flavor-tags-${this.props.toggleHide}`} src={htmlTag} alt="flavor-tag-html" /> */}
          {/* <div className="landing-nav-top">
            <button className="nav-inactive"></button>
          </div> */}
          <div className="landing-intro">
            {/* <img src={h1TagOpen} alt="h1-tag-flourish" className={`flavor-tag-open h1-flavor-open flavor-tags-${this.props.toggleHide}`} /> */}
            <h1 data-aos="fade-right">
              <span className="bolded">J</span>ulius <span className="bolded">D</span>orfman
              <br />
            </h1>
            <span data-aos="fade-up" className="landing-flavor">Web Developer / Software Engineer</span>
            {/* <img src={h1TagClose} alt="h1-tag-flourish" className={`flavor-tag-close h1-flavor-close flavor-tags-${this.props.toggleHide}`} /> */}
            <p className="landing-title">
              {/* <img src={pTagOpen} alt="p-tag-flourish" className={`flavor-tag-open flavor-tags-${this.props.toggleHide}`} /> */}
              <br />
              {/* Full Stack Developer / Software Engineer */}
              <br />
              {/* <img src={pTagClose} alt="p-tag-flourish" className={`flavor-tag-close flavor-tags-${this.props.toggleHide}`} /> */}
            </p>
            <div className="button-wrapper">
              <a href="https://www.linkedin.com/in/juliusgdorfman/"
                target="_blank" rel="noreferrer"
                className="contact-me">
                <p>
                  Contact Me
                </p>
                <span className="glow-wrapper">
                  <span className="glow" />
                </span>
              </a>
            </div>
            <div className="indication-wrapper">
              <div></div>
              <div href={'#about-component'} className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
              {/* <img src={sectionTagClose} className={`flavor-tag-close section-tag-flavor-close flavor-tags-${this.props.toggleHide}`} alt="section-tag-flavor" /> */}
            </div>
          </div>



          {/* <div class="marquee-container marquee-tech">
            <div class="marquee-wrapper">
              <div class="marquee">
                <ul>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Nodejs</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>RPGLE</li>
                  <li>Bootstrap</li>
                </ul>
                <ul>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Nodejs</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>RPGLE</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="marquee-container marquee-industry">
            <div class="marquee-wrapper">
              <div class="marquee">
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>AWS</li>
                  <li>Heroku</li>
                  <li>npm</li>
                  <li>Jira</li>
                  <li>Agile</li>
                  <li>Documentation</li>
                  <li>Figma</li>
                  <li>Client Exp</li>
                </ul>
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>AWS</li>
                  <li>Heroku</li>
                  <li>npm</li>
                  <li>Jira</li>
                  <li>Agile</li>
                  <li>Documentation</li>
                  <li>Figma</li>
                  <li>Client Exp</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="marquee-container marquee-interests">
            <div class="marquee-wrapper">
              <div class="marquee">
                <ul>
                  <li>Piano</li>
                  <li>Gym</li>
                  <li>Travel</li>
                  <li>Cooking</li>
                  <li>Dancing</li>
                  <li>Games</li>
                  <li>Creating</li>
                  <li>Running</li>
                  <li>Drawing</li>
                  <li>Streaming</li>
                </ul>
                <ul>
                  <li>Piano</li>
                  <li>Gym</li>
                  <li>Travel</li>
                  <li>Food</li>
                  <li>Dancing</li>
                  <li>Games</li>
                  <li>Creating</li>
                  <li>Running</li>
                  <li>Drawing</li>
                  <li>Streaming</li>
                </ul>
              </div>
            </div>
          </div> */}




          <div data-aos="fade-left" data-aos-duration="3000" className="homepage-text">
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