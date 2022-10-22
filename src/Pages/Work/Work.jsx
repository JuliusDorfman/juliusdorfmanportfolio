import React from 'react';
import './Work.css';
import AOTT from '../../../src/Assets/SoTA.png';

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    currentPage: this.props.currentPage,
    page: "work"
    }
  }


  handleWorkPage = (e) => {
    e.preventDefault();
    let pageValue = e.target.getAttribute('pagevalue');
    this.setState({currentPage: pageValue}, ()=> {
      this.props.handleCurrentPage(pageValue);
    });
  }



  render() {
    return (
      <div id="work-component">
          <div className="work-text">WORK</div>
          <h1><span className="subtext">some of</span> My Work</h1>
        <div className="work-component-content">
          <div className="work-panels-wrapper">
          <div id="art-of-twitch" className="work-panel">
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
    )
  }
}