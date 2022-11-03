import React, { Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <section id="experience-component">
        <div className="experience-text">Experience</div>
        <h1 className="experience-header"><span className="subtext">relevent </span>Experience</h1>
        <div className="experience-content-wrapper">
        </div>
        <div className="page-split">
          <div className="experience-section">
            <p className="experience-page-intro">
              <br />
              <br />
            </p>
          </div>
          <div className="experience-animation-wrapper">
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
