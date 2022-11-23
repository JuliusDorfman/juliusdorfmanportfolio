/* eslint-disable react/prop-types */
// eslint-disable-next-line no-undef
import React, { Component } from 'react';
// import TweenMax from "gsap";
// import About from '../../Pages/About';
// import Skills from '../../Pages/Skills';
import Work from '../../Pages/Work';
import Expertise from '../Expertise/Expertise';
import Experience from '../Experience/Experience';
import Accolades from '../Accolades/Accolades';
// import Contact from '../../Pages/Contact';
// import pTagOpen from '../../Assets/p-tag-open-2.png';
// import pTagClose from '../../Assets/p-tag-close-2.png';
// import h1TagOpen from '../../Assets/h1-tag-open-2.png';
// import h1TagClose from '../../Assets/h1-tag-close-2.png';
// import htmlTag from '../../Assets/html-tag-open-2.png';
// import sectionTagClose from '../../Assets/section-tag-close-2.png';
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
        <div className={`fixed-links-wrapper fixed-links-${FixedLinksVisibility}`}>
          <ul className="fixed-links">
            <li>
              <a href="https://www.linkedin.com/in/juliusgdorfman/" target="_blank" rel="noreferrer">
                <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z" />
                </svg>
              </a>
            </li>
            <li>

              <a href="https://github.com/JuliusDorfman/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="1">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

            </li>
            <li>

              <a href="https://codepen.io/juliusdorfman" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="1">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
              </a>

            </li>
          </ul>
        </div>
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
            <span data-aos="fade-up" className="landing-flavor">web developer</span>
            {/* <img src={h1TagClose} alt="h1-tag-flourish" className={`flavor-tag-close h1-flavor-close flavor-tags-${this.props.toggleHide}`} /> */}
            <p className="landing-title">
              {/* <img src={pTagOpen} alt="p-tag-flourish" className={`flavor-tag-open flavor-tags-${this.props.toggleHide}`} /> */}
              <br />
              Full Stack Developer / Software Engineer
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