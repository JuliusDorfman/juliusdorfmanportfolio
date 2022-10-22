import React from 'react';
import './Work.css';
import AOTT from '../../../src/Assets/AOTT.png';

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      currentPage: this.props.currentPage,
      page: 'work'
    };
  }


  handleWorkPage = (e) => {
    e.preventDefault();
    let pageValue = e.target.getAttribute('pagevalue');
    this.setState({ currentPage: pageValue }, () => {
      // eslint-disable-next-line react/prop-types
      this.props.handleCurrentPage(pageValue);
    });
  };



  render() {
    return (
      <div id="work-component">
        <div className="work-text">WORK</div>
        <h1><span className="subtext">some of</span> My Work</h1>
        <div className="work-component-content">
          <div className="work-panels-wrapper">
            <div id="art-of-twitch" className="work-panel">
              {/* eslint-disable-next-line react/no-unknown-property */}
              <img onClick={(e) => this.handleWorkPage(e)} pagevalue={'artoftwitchchat'} src={AOTT} alt="State of Twitch" />
            </div>
            <div className="work-panel">Get Excited...</div>
          </div>
          <div className="work-panels-wrapper">
            <div className="work-panel">In Development...</div>
            <div className="work-panel">Stay Tuned...</div>
          </div>
          {/* <div className="indication-wrapper">
            <div></div>
            <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
          </div> */}
        </div>
      </div>
    );
  }
}