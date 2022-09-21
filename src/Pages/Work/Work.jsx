import React from 'react';
import './Work.css';

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    currentPage: this.props.currentPage,
    page: "work"
    }
  }

  render() {
    return (
      <div id="work-component">
        <h1><span className="subtext">some of</span> My Work</h1>
        {/* <div className="indication-wrapper">
          <div></div>
          <div className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div>
        </div> */}
      </div>
    )
  }
}