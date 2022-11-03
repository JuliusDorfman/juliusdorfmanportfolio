/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage
    };
  }


  handlePageClicked = (e) => {
    let pageValue = e.target.getAttribute('pagevalue');
    let scrollDestination = document.querySelector(`#${pageValue}`);
    console.log("scrollDestination", scrollDestination)
    console.log('pagevalue', pageValue);
    scrollDestination.scrollIntoView()
  };

  // handleClick = (e) => {
  //   let pageValue = e.target.getAttribute('pagevalue');
  //   // console.log('nav click', pageValue)
  //   this.setState({ currentPage: pageValue }, () => {
  //     this.props.handleCurrentPage(pageValue);
  //     this.props.toggleNav();
  //   });
  // };


  render() {
    return (
      <div className={`navbar-component`}>
        <div className="nav-header">
          <div className="nav-icon">
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
            <div className="initials-subscript">
              <span>J</span>ulius <span>D</span>orfman
            </div>
          </div>
        </div>
        <div className="navigation-links-wrapper">
          <ul className="navigation-links">
            <li pagevalue="homepage-component" onClick={this.handlePageClicked}>Home</li>
            {/* <li pagevalue="home" onClick={(e) => { this.handleClick(e); }}>Home</li> */}
            <li pagevalue="expertise-component" onClick={this.handlePageClicked}>Expertise</li>
            {/* <li pagevalue="about" onClick={(e) => { this.handleClick(e); }}>About</li> */}
            {/* <li pagevalue="skills-component" onClick={(e) => { this.handleClick(e); }}>My Skills</li> */}
            {/* <li pagevalue="skills" onClick={(e) => { this.handleClick(e); }}>My Skills</li> */}
            <li pagevalue="work-component" onClick={this.handlePageClicked}>Work</li>
            {/* <li pagevalue="work" onClick={(e) => { this.handleClick(e); }}>Work</li> */}
            {/* <li value="contact">Contact</li> */}
            <li pagevalue="experience-component" onClick={this.handlePageClicked}>Experience</li>
            {/* <li value="blog">Blog</li> */}
          </ul>
        </div>
        <div className="nav-socials-wrapper">
          <ul className="nav-socials-links">
            <li>
              {/* { console.log(this.props) } */}
              {this.props.floaters
                ?
                <div className="floater-button-navbar" onClick={this.props.toggleFloaters}><div className="smaller">Animated Background is Enabled <br />&#128512;</div></div>
                :
                <div className="floater-button-navbar" onClick={this.props.toggleFloaters}><div className="smaller">Animated Background is Disabled <br />&#128544;</div></div>
              }
            </li>
            <li>
              <a href="https://www.linkedin.com/in/juliusgdorfman/" rel="noreferrer" target="_blank"><i class="fa fa-linkedin-square"></i></a>
            </li>
            <li>
              <a href="https://github.com/JuliusDorfman" rel="noreferrer" target="_blank"><i class="fa fa-github-square"></i></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
