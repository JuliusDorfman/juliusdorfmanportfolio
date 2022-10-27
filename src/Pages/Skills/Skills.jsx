import React, { Component } from 'react';
import './Skills.scss';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      currentPage: this.props.currentPage,
      page: 'skills',
      yearsPassed: 0,
      cy: 80,
      cx: 80,
      r: 70,
      progActive: false
    };

  }

  componentDidMount() {
    const startYear = 2017;
    const getDate = new Date();
    const currentYear = getDate.getFullYear();
    const yearsPassed = currentYear - startYear;
    this.setState({ yearsPassed: yearsPassed });
  }


  handleMouseClick = (e) => {
    let progActive = this.state.progActive;
    progActive = progActive ? true : false;
    this.setState({progActive: progActive});
  }


  render() {

    const cx = this.state.cx;
    const cy = this.state.cy;
    const r = this.state.r;
    const progActive = this.state.progActive;

    return (
      <div id="skills-component">
        <div className="skills-text">SKILLS</div>
        <h1><span className="subtext">a few of</span> My Skills</h1>
        <span className="skills-content-wrapper">
          <p>Since before the start of my professional career in tech, {this.state.yearsPassed} years ago, I had already been building websites. 
              Over the course of my career, I&apos;ve developed software for large companies, consulted for start-ups, and been to floor shows as a representative to listen and speak directly with product users.</p>
          <p>My passion for web technologies has, since then, driven me to develop web applications, plugins, and features from the simple and purely functional to the eccentric and attention grabbing.</p>
          {/* <div className="skills-list-wrapper">
            <ul>
              <li>Frontend</li>
              <li></li>
            </ul>
            <ul>
              <li>Backend</li>
            </ul>
            <ul>
              <li>ReactJS</li>
            </ul>
          </div> */}
        </span>

        <div className="progressbars-container">
          <div className="container__progressbars">
            <div className={`progressbar progressbar1 progress1-${progActive}`} onClick={this.handleMouseClick}>
              <svg className="progressbar__svg">
                {/* <circle onMouseEnter={this.handleMouseHover} cx={cx} cy={cy} r={r} className="progressbar__svg-circle circle-frontend shadow-frontend"> </circle> */}
                <circle cx={cx} cy={cy} r={r} className="progressbar__svg-circle circle-frontend shadow-frontend"> </circle>
              </svg>
              <span className="progressbar__text shadow-frontend">Frontend</span>
            </div>

            <div className={`progressbar progressbar2 progress2-${progActive}`} onClick={this.handleMouseClick}>
              <svg className="progressbar__svg">
                {/* <circle onMouseEnter={this.handleMouseHover} cx={cx} cy={cy} r={r} className="progressbar__svg-circle circle-backend shadow-backend"> </circle> */}
                <circle cx={cx} cy={cy} r={r} className="progressbar__svg-circle circle-backend shadow-backend"> </circle>
              </svg>
              <span className="progressbar__text shadow-backend">Backend</span>
            </div>

            <div className={`progressbar progressbar3 progress3-${progActive}`} onClick={this.handleMouseClick}>
              <svg className="progressbar__svg">
                {/* <circle onMouseEnter={this.handleMouseHover} cx={cx} cy={cy} r={r} className="progressbar__svg-circle circle-passion shadow-passion"> </circle> */}
                <circle cx={cx} cy={cy} r={r} className="progressbar__svg-circle circle-passion shadow-passion"> </circle>
              </svg>
              <span className="progressbar__text shadow-passion">Passion</span>
            </div>
          </div>
        </div>
{/* 
        <div className="skills-row">
            <div className="skills-container resume-container">
              <ul className="skill-list">
                <li className="skill-item">
                  <div className="skills-head">
                    <h2>Development</h2>
                  </div>
                  <div className="skills-details">
                    <ul>
                      <span>
                        <li className="colors">html5 &amp; css3 </li>
                        <li className="colors">javascript (es6)</li>
                      </span>
                      <span>
                        <li className="colors">jquery</li>
                        <li className="colors">react</li>
                      </span>
                    </ul>
                  </div>
                </li>
                <li className="skill-item">
                  <div className="skills-head">
                    <h2>UX</h2>
                  </div>
                  <div className="skills-details">
                    <ul>
                      <span>
                        <li className="colors">accessibility</li>
                        <li className="colors">user workflows</li>
                      </span>
                      <span>
                        <li className="colors">wire framing</li>
                        <li className="colors">client empathy</li>
                      </span>
                    </ul>
                  </div>
                </li>
                <li className="skill-item">
                  <div className="skills-head">
                    <h2>DevOps</h2>
                  </div>
                  <div className="skills-details">
                    <ul>
                      <span>
                        <li className="colors">big picture project awareness</li>
                        <li className="colors">cloud services</li>
                      </span>
                      <span>
                        <li className="colors">testing</li>
                        <li className="colors">version control</li>
                      </span>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}

      </div>
    );
  }
}