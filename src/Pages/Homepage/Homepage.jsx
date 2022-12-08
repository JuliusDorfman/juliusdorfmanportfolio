import React, { Component, createRef } from 'react';
// import TweenMax from "gsap";
import About from '../../Pages/About';
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
        <FixedLinks fixedlinksvisibility={FixedLinksVisibility} />
        {/* <canvas id="mouse-trail">

        </canvas> */}
        <div className="landing-page-wrapper">
          <div className="landing-intro">
            <h1 data-aos="fade-in" data-aos-duration="3000">
              <span className="bolded">J</span>ulius <span className="bolded">D</span>orfman
              <br />
            </h1>
            <span data-aos="fade-in" className="landing-flavor">Web Developer / Software Engineer</span>
            <div className="indication-wrapper">
              <div></div>
              <div href={'#about-component'} className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
            </div>
          </div>

          <div className="landing-intro-fragment">
            <div className="shadow-wrapper">
              <div className="shadow"></div>
            </div>

            <div className="button-container">
              <div className="button-wrapper" data-aos="fade-is" data-aos-duration="3000">
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
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" className="homepage-text">
            HELLO
            <br />
            WORLD
          </div>
        </div>
        <div className="background-spacer"></div>
        <div className="homepage-components-wrapper">
          {/* <Expertise /> */}
          <About />
          {/* <Skills /> */}
          <Work handleCurrentPage={this.props.handleCurrentPage} />
          {/* <Contact /> */}
          <Experience />
          <Accolades />
        </div>
      </div>
    );
  }
}