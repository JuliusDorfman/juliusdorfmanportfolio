/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './FullScreenSidebar.css';


export default class FullScreenSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarState: 'visible',
      currentPage: this.props.currentPage
    };
  }

  render() {
    const handlePageClicked = (e) => {
      let pageValue = e.target.getAttribute('pagevalue');
      console.log(' ');
      if (pageValue === 'homepage') {
        if (window.pageYOffset > 200) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }
      this.setState({ currentPage: pageValue }, () => {
        this.props.handleCurrentPage(pageValue);
      });
    };

    return (
      <div id="FullScreenSidebar" className={`sidebar-${this.props.toggleHide}`}>
        <div id="FullScreenSidebar-head">
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
          <div className="initials-name">
            Julius
          </div>
          <p className="initials-subscript">Web Developer</p>
        </div>
        <div id="fullScreenSidebar-links">
          <ul>
            <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="homepage">Home</li>
            <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="about">About</li>
            <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="skills">My Skills</li>
            <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="work">Work</li>
            {/* <li onClick={(e) => handlePageClicked(e)} className={`${this.activeMenuItem}`} pagevalue="contact">Contact</li> */}
          </ul>
          {this.props.floaters
            ?
            <div className="floater-button" onClick={this.props.toggleFloaters}><div className="smaller">Animated Background is Enabled <br />&#128512;</div></div>
            :
            <div className="floater-button" onClick={this.props.toggleFloaters}><div className="smaller">Animated Background is Disabled <br />&#128544;</div></div>
          }
        </div>
        <footer id="footer-component">
          <div className="footer-content-wrapper">
            <p>Julius G. Dorfman &copy;</p>
          </div>
        </footer>
      </div>
    );
  }
}
