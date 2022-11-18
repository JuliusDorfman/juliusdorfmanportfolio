import React from 'react';
import './Work.css';
import Spinner from '../../Components/Spinner/Spinner';
import ArtOfTwitchChat from '../ArtOfTwitchChat';
import AOTT from '../../../src/Assets/AOTT-1.png';
import FlowingWater from '../../Components/FlowingWater/FlowingWater';

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
        <h1><span data-aos="fade-right" className="subtext">some of</span> <span data-aos="fade-up">My Work</span></h1>
        <div className={`work-component-content work-slides-${projectSlides.AOTT}`}>
          <div id="art-of-twitch" className="work-panel-container" data-aos="fade-right">
            <div className="img-wrapper">
              <img src={AOTT} alt="State of Twitch" />
              <div className="project-blur"><span projectvalue='AOTT' onClick={this.handleWorkPage}>Art of Twitch</span></div>
            </div>
            <div className="work-panel-details">
              <h3>
                Art of Twitch
              </h3>
              <p>
                Web Application
                <br />
              </p>
              <div
                className="panel-info"
                onClick={this.handleWorkPage}
                projectvalue='AOTT'
              >
                <p>View Project Details</p>
              </div>
            </div>
          </div>
          <div className="work-panel-container">
            {/* <FlowingWater /> */}
          </div>
          <div className="work-panel-container">
            {/* <FlowingWater /> */}
          </div>
          <div id="work-tbd" className="work-panel-container"  data-aos="fade-left">
            <div className="img-wrapper">
              <Spinner />
              {/* <img onClick={this.handleWorkPage} pagevalue={'artoftwitchchat'} src={AOTT} alt="State of Twitch" /> */}
            </div>
            <div className="work-panel-details">
              <h3>
                Coming Soon...
              </h3>
              <p>
                Web Application
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="work-pages-container">

          <div className={`AOTT-slide-${projectSlides.AOTT}`}>
            {/* <div className={`AOTT-slide-false`}> */}
            <div className="return-button" onClick={this.handleReturnButton}><span>&lt;</span><br />back</div>
            <ArtOfTwitchChat returnbutton={this.handleReturnButton} />
          </div>

        </div>
      </section >
    );
  }
}