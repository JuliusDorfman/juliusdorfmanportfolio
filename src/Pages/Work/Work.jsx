import React, { createRef } from 'react';
import './Work.scss';
// import Spinner from '../../Components/Spinner/Spinner';
// import ArtOfTwitchChat from '../ArtOfTwitchChat/ArtOfTwitchChat';
import AOTC from '../../Assets/AOTC-thumbnail.png'
import gsap from 'gsap';
const twitchIcon = require('../../Assets/twitch-icon.png');
const img1 = require('../../Assets/img1.png');
const img2 = require('../../Assets/img2.png');
const img3 = require('../../Assets/img3.png');
const img4 = require('../../Assets/img4.png');
const img5 = require('../../Assets/img5.png');
const img6 = require('../../Assets/img6.png');
const img7 = require('../../Assets/img7.png');
const img8 = require('../../Assets/img8.png');
const img9 = require('../../Assets/img9.png');
const img10 = require('../../Assets/img10.png');
export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredProject: false,

    };
    this.featuredProjectVisual = createRef();
    this.featuredProjectContent = createRef();
    this.featuredProjectFullPage = createRef();
    this.featuredProjectWrapper = createRef();
    this.featuredProjectLoading = createRef();
    this.projectsList = createRef();
    this.tl = gsap.timeline({ paused: true });
  }

  toggleFeaturedProject = () => {
    if (this.state.featuredProject) {
      this.tl.play();
    } else {
      this.tl.reverse();
    }
  }

  handleFeaturedProjectPage = () => {
    this.setState({ featuredProject: !this.state.featuredProject },
      () => {
        this.toggleFeaturedProject();
      });
  }

  componentDidMount = () => {
    this.tl.to(this.featuredProjectLoading.current, {
      y: "100%",
      duration: ".75",
      ease: "power2.inOut"
    }, 0)
    this.tl.to(this.featuredProjectWrapper.current, {
      boxShadow: "inset 20px 20px 52px #070e1b, inset -20px -20px 52px #193467",
      duration: ".1",
      ease: "power2.inOut"
    }, 1);
    this.tl.to(this.featuredProjectVisual.current, {
      scale: ".8",
      duration: ".5",
      delay: ".5",
      ease: "power2.inOut"
    }, 1);
    this.tl.to(this.featuredProjectContent.current, {
      scale: ".8",
      duration: ".5",
      delay: ".5",
      ease: "power2.inOut"
    }, 1);
    this.tl.to(this.featuredProjectLoading.current, {
      y: "200%",
      duration: "2",
      ease: "power2.inOut"
    }, 2);
    this.tl.to(this.featuredProjectFullPage.current, {
      y: "-100px",
      duration: ".5",
      ease: "power2.inOut"
    }, 2);
    this.tl.to(this.featuredProjectFullPage.current, {
      y: "0",
      scale: "1",
      duration: "1",
      delay: ".5",
      ease: "power2.inOut"
    }, 2);
    this.tl.to(this.projectsList.current, {
      duration: "1",
      delay: "1",
      ease: "power2.inOut",
      boxShadow: "11px 11px 22px #060d1a, inset -11px -11px 22px #1a3568"
    }, 2);
  }

  componentWillUnmount = () => {
    this.tl.kill();
  }

  render() {
    let { featuredProject } = this.state;
    return (
      <section id='work-component'>
        <div data-aos="fade-left" data-aos-duration="3000" className="work-text">WORK</div>
        <h1 className="work-header cursor-default" style={{ opacity: 1 }}>
          <span data-aos="fade-right" className="subtext">some of</span>
          <span data-aos="fade-up">My Work</span>
        </h1>
        <div className="projects-list-wrapper">
          <ul ref={this.projectsList} className="featured-projects-list">
            <span className="loader-wrapper">
              <span
                ref={this.featuredProjectLoading}
                className='projects-animation-loading'></span>
            </span>
            <li id="art-of-twitch">
              {/* <ArtOfTwitchChat /> */}
              <div ref={this.featuredProjectWrapper} className={`featured-project-display`}>
                <div ref={this.featuredProjectFullPage}
                  className={`featured-project-expanded`}>
                  <div className="radio__5">
                    <input
                      id="radio-5"
                      className={`radio-button radio-button-${featuredProject}`}
                      type="radio" name="radio" value="5" />
                    <label onClick={this.handleFeaturedProjectPage} htmlFor="radio-5"></label>
                  </div>
                  <div className="expanded-project-content">
                    <header>
                      <h3>
                        Art of Twitch
                      </h3>
                    </header>
                    <div className="featured-project-goal">
                      <h6>Goal</h6>
                      <p>
                        I wanted  to combine an exciting new technology that&apos;s been on everyone&apos;s
                        radar recently with a favorite passtime of mine;
                        a marriage of <span className="bolded secondary-blue">AI Generated Art</span> and <span className="bolded secondary-blue">Twitch.tv</span>!
                      </p>
                    </div>
                    <div className="featured-project-story">
                      <h6>Product Story</h6>
                      <p>I started building this project with the intention of using <span className="bolded secondary-blue">Stable Diffusion</span>, a fairly new technology at the time, for <span className="italicized">something</span>.
                        Whilst building the server-side, <span className="bolded secondary-blue">Twitch.tv</span> was open on my second monitor in a hidden tab. I've always been
                        interested in viewer-streamer relationship and a large piece of that is chat interaction. I thought it would be fairly neat to
                        have a visual component to the chat, so I created this project. <span className="bolded">Art of Twitch</span> <span className="bolded secondary-blue">monitors chat</span> and <span className="bolded secondary-blue">creates a prompt</span>, then passes it to a Stable Diffusion model to <span className="bolded secondary-blue">generate an image</span>.
                      </p>
                    </div>
                    <footer>
                      <h4>Technologies</h4>
                      <ul className="tech-list-wrapper">
                        <li>React</li>
                        <li>Node</li>
                        <li>Python</li>
                        <li>AWS: S3</li>
                        <li>Twitch <a href="https://twitch.tv" rel='noreferrer' target="_blank"><img className="tech-icons" src={twitchIcon} alt="twitch-icon" /></a> </li>
                        <li>Heroku</li>
                        <li>Stable Diffusion</li>
                      </ul>
                      <div className="expanded-links-wrapper">
                        <a href="https://github.com/JuliusDorfman/twitchplugin" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="1">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                        <a className="external-link" href="https://art-of-twitch.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="-25 -25 700 700" xmlns="http://www.w3.org/2000/svg">
                            <g fillRule="evenodd">
                              <path d="m527.41 237.75c-4.4844 0-8.7812 1.7812-11.953 4.9531-3.168 3.168-4.9492 7.4688-4.9492 11.953v236.55h-371.72v-371.72h236.55c5.9062-0.1875 11.285-3.4492 14.188-8.5977 2.8984-5.1523 2.8984-11.441 0-16.594-2.9023-5.1484-8.2812-8.4102-14.188-8.5977h-253.43c-4.4805 0-8.7773 1.7773-11.949 4.9453-3.168 3.1641-4.9531 7.4609-4.957 11.941v405.51c0 4.4844 1.7812 8.7852 4.9531 11.953 3.168 3.1719 7.4688 4.9531 11.953 4.9531h405.51c4.4844 0 8.7852-1.7812 11.953-4.9531 3.1719-3.168 4.9531-7.4688 4.9531-11.953v-253.43c0-4.4844-1.7812-8.7852-4.9531-11.953-3.168-3.1719-7.4688-4.9531-11.953-4.9531z" />
                              <path d="m578.09 35h-101.38c-5.9102 0.19141-11.289 3.4531-14.188 8.6016-2.8984 5.1484-2.8984 11.441 0 16.59 2.8984 5.1484 8.2773 8.4102 14.188 8.6016h60.531l-224.56 224.59c-4.2734 4.2734-5.9375 10.5-4.3711 16.336 1.5664 5.8359 6.125 10.391 11.961 11.953s12.062-0.10938 16.332-4.3828l224.59-224.54v60.531c-0.14844 4.5781 1.5664 9.0156 4.7539 12.305 3.1836 3.2891 7.5664 5.1445 12.145 5.1445 4.5742 0 8.957-1.8555 12.145-5.1445 3.1836-3.2891 4.8984-7.7266 4.75-12.305v-101.38c0-4.4844-1.7812-8.7852-4.9531-11.953-3.168-3.1719-7.4688-4.9531-11.953-4.9531z" />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </footer>
                  </div>
                  <div className="expanded-project-visuals-wrapper">
                    <h6>Generated Images</h6>
                    <ul className="expanded-project-visuals-list">
                      <li><img src={img1} alt="Generated Project Sample" /></li>
                      <li><img src={img2} alt="Generated Project Sample" /></li>
                      <li><img src={img3} alt="Generated Project Sample" /></li>
                      <li><img src={img4} alt="Generated Project Sample" /></li>
                      <li><img src={img5} alt="Generated Project Sample" /></li>
                      <li><img src={img6} alt="Generated Project Sample" /></li>
                      <li><img src={img7} alt="Generated Project Sample" /></li>
                      <li><img src={img8} alt="Generated Project Sample" /></li>
                      <li><img src={img9} alt="Generated Project Sample" /></li>
                      <li><img src={img10} alt="Generated Project Sample" /></li>
                    </ul>
                  </div>
                </div>
                <div ref={this.featuredProjectContent} className="project-content">
                  <div className="project-headers" data-aos="fade-in" data-aos-duration="3000">
                    <p className="project-overline">Featured Project</p>
                    <h3
                      className="project-title"
                      onClick={this.handleFeaturedProjectPage}
                    >
                      Art of Twitch
                    </h3>
                  </div>
                  <div className="project-description">
                    A web app for visualizing the "mood" of an active stream
                    from Twitch.tv via AI Art Generation. After monitoring a selected
                    streamers chat a prompt will be passed to a stable-diffusion model
                    and an art piece will be generated.
                  </div>
                  <ul className="project-tech-list" data-aos="fade-in" data-aos-duration="3000">
                    <li>ReactJS</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Python</li>
                  </ul>
                  <div className="project-links" data-aos="fade-in" data-aos-duration="3000">
                    <a href="https://github.com/JuliusDorfman/twitchplugin" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="1">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a className="external-link" href="https://art-of-twitch.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="-25 -25 700 700" xmlns="http://www.w3.org/2000/svg">
                        <g fillRule="evenodd">
                          <path d="m527.41 237.75c-4.4844 0-8.7812 1.7812-11.953 4.9531-3.168 3.168-4.9492 7.4688-4.9492 11.953v236.55h-371.72v-371.72h236.55c5.9062-0.1875 11.285-3.4492 14.188-8.5977 2.8984-5.1523 2.8984-11.441 0-16.594-2.9023-5.1484-8.2812-8.4102-14.188-8.5977h-253.43c-4.4805 0-8.7773 1.7773-11.949 4.9453-3.168 3.1641-4.9531 7.4609-4.957 11.941v405.51c0 4.4844 1.7812 8.7852 4.9531 11.953 3.168 3.1719 7.4688 4.9531 11.953 4.9531h405.51c4.4844 0 8.7852-1.7812 11.953-4.9531 3.1719-3.168 4.9531-7.4688 4.9531-11.953v-253.43c0-4.4844-1.7812-8.7852-4.9531-11.953-3.168-3.1719-7.4688-4.9531-11.953-4.9531z" />
                          <path d="m578.09 35h-101.38c-5.9102 0.19141-11.289 3.4531-14.188 8.6016-2.8984 5.1484-2.8984 11.441 0 16.59 2.8984 5.1484 8.2773 8.4102 14.188 8.6016h60.531l-224.56 224.59c-4.2734 4.2734-5.9375 10.5-4.3711 16.336 1.5664 5.8359 6.125 10.391 11.961 11.953s12.062-0.10938 16.332-4.3828l224.59-224.54v60.531c-0.14844 4.5781 1.5664 9.0156 4.7539 12.305 3.1836 3.2891 7.5664 5.1445 12.145 5.1445 4.5742 0 8.957-1.8555 12.145-5.1445 3.1836-3.2891 4.8984-7.7266 4.75-12.305v-101.38c0-4.4844-1.7812-8.7852-4.9531-11.953-3.168-3.1719-7.4688-4.9531-11.953-4.9531z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <picture ref={this.featuredProjectVisual} className="project-visual">
                  <span className="visual-overlay" onClick={this.handleFeaturedProjectPage}>
                  </span>
                  <img src={AOTC} alt="Art of Twitch Chat" />
                </picture>
              </div>

            </li>
          </ul>
          <div className="other-projects-wrapper">
            <h4 data-aos="fade-in" data-aos-duration="3000">Other Projects</h4>
            <ul className="other-projects-list">
              <li>
                <div className="other-project-inner">
                  <header>
                    <div className="other-project-top">
                      <div className="folder">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="feather feather-folder">
                          <title>Folder</title>
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="other-project-links"></div>
                    </div>
                    <h3 className="other-project-title">Coming Soon</h3>
                    <div className="other-project-description">Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptates placeat adipisci non dolorem reiciendis accusantium
                      cupiditate possimus tenetur et in incidunt doloribus impedit veritatis, ab tempora!
                      Illum beatae doloremque quo.</div>
                  </header>
                  <footer>
                    <ul>
                      <li>Tech 1</li>
                      <li>Tech 2</li>
                      <li>Tech 3</li>
                    </ul>
                  </footer>
                </div>
              </li>
              <li>
                <div className="other-project-inner">
                  <header>
                    <div className="other-project-top">
                      <div className="folder">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="feather feather-folder">
                          <title>Folder</title>
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="other-project-links"></div>
                    </div>
                    <h3 className="other-project-title">Coming Soon</h3>
                    <div className="other-project-description">Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptates placeat adipisci non dolorem reiciendis accusantium
                      cupiditate possit. Voluptates placeat adipisci non dolorem reiciendis accusantium
                      cupiditate possit. Voluptates placeat adipisci non dolorem reiciendis accusantium
                      cupiditate possimus tenetur et in incidunt doloribus impedit veritatis, ab tempora!
                      Illum beatae doloremque quo.</div>
                  </header>
                  <footer>
                    <ul>
                      <li>Tech 1</li>
                      <li>Tech 2</li>
                      <li>Tech 3</li>
                    </ul>
                  </footer>
                </div>
              </li>
              <li>
                <div className="other-project-inner">
                  <header>
                    <div className="other-project-top">
                      <div className="folder">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="feather feather-folder">
                          <title>Folder</title>
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="other-project-links"></div>
                    </div>
                    <h3 className="other-project-title">Coming Soon</h3>
                    <div className="other-project-description">Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptates placeat adipisci non dolorem reiciendis accusantium
                      cupiditate possimus tenetur et in incidunt doloribus impedit veritatis, ab tempora!
                      Illum beatae ue quo.</div>
                  </header>
                  <footer>
                    <ul>
                      <li>Tech 1</li>
                      <li>Tech 2</li>
                      <li>Tech 3</li>
                    </ul>
                  </footer>
                </div>
              </li>
              <li>
                <div className="other-project-inner">
                  <header>
                    <div className="other-project-top">
                      <div className="folder">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="feather feather-folder">
                          <title>Folder</title>
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="other-project-links"></div>
                    </div>
                    <h3 className="other-project-title">Coming Soon</h3>
                    <div className="other-project-description">Lorem ipsum dolor sit amet consectetur
                      adipisicinn incidunt doloribus impedit veritatis, ab tempora!
                      Illum beatae doloremque quo.</div>
                  </header>
                  <footer>
                    <ul>
                      <li>Tech 1</li>
                      <li>Tech 2</li>
                      <li>Tech 3</li>
                    </ul>
                  </footer>
                </div>
              </li>
            </ul>
          </div >
        </div >
      </section >
    );
  }
}
