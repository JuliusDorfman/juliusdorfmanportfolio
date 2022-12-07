import React from 'react';
import './Work.scss';
import Spinner from '../../Components/Spinner/Spinner';
import AOTC from '../../Assets/AOTC-thumbnail.png'

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      currentPage: this.props.currentPage,
      page: 'work',
      projectSlides: {
        AOTT: false
      }
    };
  }


  handleWorkPage = (e) => {
    e.preventDefault();
    let projectValue = e.target.getAttribute('projectvalue');
    let projectSlides = {
      AOTT: false,
    };
    let workComponent = document.querySelector(`#work-component`);
    workComponent.scrollIntoView()
    workComponent.style.height = "160vh";
    projectSlides[projectValue] = true;
    this.setState({ projectSlides: projectSlides });
  };

  handleReturnButton = () => {
    let workComponent = document.querySelector(`#work-component`);
    workComponent.scrollIntoView()
    workComponent.style.height = "initial";
    let projectSlides = {
      AOTT: false,
    }
    this.setState({ projectSlides: projectSlides })
  }



  // handleWorkPage = (e) => {
  //   e.preventDefault();
  //   let pageValue = e.target.getAttribute('pagevalue');
  //   this.setState({ currentPage: pageValue }, () => {
  //     // eslint-disable-next-line react/prop-types
  //     this.props.handleCurrentPage(pageValue);
  //   });
  // };


  render() {

    let projectSlides = this.state.projectSlides;

    return (
      <section id='work-component'>
        <div data-aos="fade-left" data-aos-duration="3000" className="work-text">WORK</div>
        <h1 className="work-header cursor-default" style={{ opacity: 1 }}>
          <span data-aos="fade-right" className="subtext">some of</span>
          <span data-aos="fade-up">My Work</span>
        </h1>
        <div className="featured-projects-list-wrapper">
          <ul className="featured-projects-list">
            <li id="art-of-twitch">
              <div className="project-content">
                <div>
                  <div className="project-headers" data-aos="fade-in" data-aos-duration="3000">
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">Art of Twitch</h3>
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
                        <g fill-rule="evenodd">
                          <path d="m527.41 237.75c-4.4844 0-8.7812 1.7812-11.953 4.9531-3.168 3.168-4.9492 7.4688-4.9492 11.953v236.55h-371.72v-371.72h236.55c5.9062-0.1875 11.285-3.4492 14.188-8.5977 2.8984-5.1523 2.8984-11.441 0-16.594-2.9023-5.1484-8.2812-8.4102-14.188-8.5977h-253.43c-4.4805 0-8.7773 1.7773-11.949 4.9453-3.168 3.1641-4.9531 7.4609-4.957 11.941v405.51c0 4.4844 1.7812 8.7852 4.9531 11.953 3.168 3.1719 7.4688 4.9531 11.953 4.9531h405.51c4.4844 0 8.7852-1.7812 11.953-4.9531 3.1719-3.168 4.9531-7.4688 4.9531-11.953v-253.43c0-4.4844-1.7812-8.7852-4.9531-11.953-3.168-3.1719-7.4688-4.9531-11.953-4.9531z" />
                          <path d="m578.09 35h-101.38c-5.9102 0.19141-11.289 3.4531-14.188 8.6016-2.8984 5.1484-2.8984 11.441 0 16.59 2.8984 5.1484 8.2773 8.4102 14.188 8.6016h60.531l-224.56 224.59c-4.2734 4.2734-5.9375 10.5-4.3711 16.336 1.5664 5.8359 6.125 10.391 11.961 11.953s12.062-0.10938 16.332-4.3828l224.59-224.54v60.531c-0.14844 4.5781 1.5664 9.0156 4.7539 12.305 3.1836 3.2891 7.5664 5.1445 12.145 5.1445 4.5742 0 8.957-1.8555 12.145-5.1445 3.1836-3.2891 4.8984-7.7266 4.75-12.305v-101.38c0-4.4844-1.7812-8.7852-4.9531-11.953-3.168-3.1719-7.4688-4.9531-11.953-4.9531z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <picture className="project-visual">
                <span className="visual-overlay"></span>
                <img src={AOTC} alt="Art of Twitch Chat" />
              </picture>
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
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder">
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
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder">
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
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder">
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
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder">
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


// <div data-aos="fade-left" data-aos-duration="3000" className="work-text">WORK</div>
// <h1 className="work-header cursor-default" style={{opacity: 1}}>
//   <span data-aos="fade-right" className="subtext">some of</span>
//   <span data-aos="fade-up">My Work</span>
// </h1>
// <div className={`work-component-content work-slides-${projectSlides.AOTT}`}>
//   <div id="art-of-twitch" className="work-panel-container" data-aos="fade-right">
//     <div className="img-wrapper">
//       <img src={AOTT} alt="State of Twitch" />
//       <div className="project-blur"><span projectvalue='AOTT' onClick={this.handleWorkPage}>Art of Twitch</span></div>
//     </div>
//     <div className="work-panel-details">
//       <h3>
//         Art of Twitch
//       </h3>
//       <p>
//         Web Application
//         <br />
//       </p>
//       <div
//         className="panel-info"
//         onClick={this.handleWorkPage}
//         projectvalue='AOTT'
//       >
//         <p>View Project Details</p>
//       </div>
//     </div>
//   </div>
//   <div className="work-panel-container">
//   </div>
//   <div className="work-panel-container">
//   </div>
//   <div id="work-tbd" className="work-panel-container" data-aos="fade-left">
//     <div className="img-wrapper">
//       <Spinner />
//     </div>
//     <div className="work-panel-details">
//       <h3>
//         Coming Soon...
//       </h3>
//       <p>
//         Web Application
//         <br />
//       </p>
//     </div>
//   </div>
// </div>
// <div className="work-pages-container">

//   <div className={`AOTT-slide-${projectSlides.AOTT}`}>
//     {/* <div className={`AOTT-slide-false`}> */}
//     <div className="return-button" onClick={this.handleReturnButton}><span>&lt;</span><br />back</div>
//     <ArtOfTwitchChat returnbutton={this.handleReturnButton} />
//   </div>

// </div>