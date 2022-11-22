/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './FullScreenSidebar.scss';



export default class FullScreenSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarState: 'visible',
      currentPage: this.props.currentPage,
      wheelDown: false,
    };
  }

  handleWheelDown = (e) => {
    if (e.deltaY > 0) {
      this.setState({ wheelDown: true }, () => {
      })
    }
    else {
      this.setState({ wheelDown: false })
    }
  };



  handlePageClicked = (e) => {
    let pageValue = e.target.getAttribute('pagevalue');
    let scrollDestination = document.querySelector(`#${pageValue}`);
    // console.log("scrollDestination", scrollDestination)
    // console.log('pagevalue', pageValue);
    scrollDestination.scrollIntoView()
  };


  componentDidMount = () => {
    window.addEventListener('wheel', this.handleWheelDown)
  }

  componentWillUnmount = () => {
    window.removeEventListener('wheel', this.handleWheelDown)
  }


  render() {
    let wheelDown = this.state.wheelDown;

    return (
      <div id="FullScreenSidebar" className={`wheel-${wheelDown} sidebar-${this.props.toggleHide}`}>
        <div id="FullScreenSidebar-head" data-aos="fade-right" data-aos-duration="3000">
          <div className="initials-icon">
            <a href="/portfolio" className="icon-card-initials-wrapper" value="portfolio" onClick={this.handleClick}>
              <p className="icon-card-initials" value="portfolio">
                J
              </p>
              <p className="icon-card-initials" value="homepage">
                D
              </p>
            </a>
          </div>
          {/* <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" className="initials-name">
            <span className="bold-weight">J</span><span className="light-weight">ulius</span>
          </div>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" className="initials-subscript">Web Developer</p> */}
        </div>
        <div id="fullScreenSidebar-links-container">
          <ul className="fullScreenSidebar-links-wrapper">
            <li data-aos="fade-down" data-aos-duration="1000" onClick={this.handlePageClicked} className={`${this.activeMenuItem}`} pagevalue="homepage-component">// Home</li>
            {/* <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="homepage">Home</li> */}
            <li data-aos="fade-down" data-aos-duration="1500" onClick={this.handlePageClicked} className={`${this.activeMenuItem}`} pagevalue="expertise-component">// Expertise</li>
            {/* <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="about">About</li> */}
            {/* <li onClick={this.handlePageClicked} className={`${this.activeMenuItem}`} pagevalue="skills-component">My Skills</li> */}
            {/* <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="skills">My Skills</li> */}
            <li data-aos="fade-down" data-aos-duration="2000" onClick={this.handlePageClicked} className={`${this.activeMenuItem}`} pagevalue="work-component">// Work</li>
            {/* <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="work">Work</li> */}
            {/* <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="contact">Contact</li> */}
            <li data-aos="fade-down" data-aos-duration="2500" onClick={this.handlePageClicked} className={`${this.activeMenuItem}`} pagevalue="experience-component">// Experience</li>
            <li data-aos="fade-down" data-aos-duration="3000" onClick={this.handlePageClicked} className={`${this.activeMenuItem}`} pagevalue="accolades-component">// Accolades</li>
          </ul>
          {/* {this.props.floaters
            ?
            <div className="floater-button" onClick={this.props.toggleFloaters}><div className="smaller">Animated Background is Enabled <br />&#128512;</div></div>
            :
            <div className="floater-button" onClick={this.props.toggleFloaters}><div className="smaller">Animated Background is Disabled <br />&#128544;</div></div>
          } */}
        </div>
        {/* <footer id="footer-component">
          <div className="footer-content-wrapper">
            <p>Julius G. Dorfman &copy;</p>
          </div>
        </footer> */}
      </div>
    );
  }
}
