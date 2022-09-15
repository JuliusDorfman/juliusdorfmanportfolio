import React, { Component } from 'react';
import pTag from '../../Assets/p-tag.svg';
import pTagOpen from '../../Assets/p-tag-open-2.png';
import pTagClose from '../../Assets/p-tag-close-2.png';
import h1TagOpen from '../../Assets/h1-tag-open-2.png';
import h1TagClose from '../../Assets/h1-tag-close-2.png';

import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClass: 'nav-inactive',
      navigation: false,
      page: 'Homepage'
    };
  };

  render() {
    return(
      <div id="homepage-component"> 
      <div className="landing-nav-top">
        <button className="nav-inactive"></button>
      </div>
        <div className="landing-intro">
          <img src={h1TagOpen} alt="h1-tag-flourish" className="flavor-tag-open h1-flavor-open"/>
          <h1>
            J<span>ulius</span> D<span>orfman</span>
            <br/>
            <span className="landing-flavor">web developer</span>
          </h1>
          <img src={h1TagClose} alt="h1-tag-flourish" className="flavor-tag-close h1-flavor-close"/>
          <p className="landing-title">
          <img src={pTagOpen} alt="p-tag-flourish" className="flavor-tag-open"/>
          <br/>
            Front End Developer / Software Engineer
          <br/>
          <img src={pTagClose} alt="p-tag-flourish" className="flavor-tag-close"/>
          </p>
          <button href="#page-rendered" className="contact-me">Contact Me</button>
        </div>
        <div className="indication-wrapper">
          {/* <div className="vertical-orientation-left">scroll</div> */}
          <div></div>
          <div className="vertical-orientation-right">scroll</div>
        </div>
        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>        <br></br>
        <div>SCROLL</div>
      </div>
    )
  }
}