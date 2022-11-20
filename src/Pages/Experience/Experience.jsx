import React, { Component } from 'react';
import './Experience.scss';
const guildLogo = require('../../Assets/Guild-Logo.png');
const supploproLogo = require('../../Assets/supplypro-logo.png');
const iMatrixLogo = require('../../Assets/imatrix_logo.png');

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentActive: {
        firstItem: false,
        secondItem: false,
        thirdItem: false
      }
    }
  }


  handleAccordian = (e) => {
    e.preventDefault();
    let itemSelected = e.target.classList[0];
    let itemState = this.state.contentActive;
    let contentActive = {
      firstItem: false,
      secondItem: false,
      thirdItem: false,
    }

    contentActive[itemSelected] = itemState[itemSelected] ? false : true;
    this.setState({ contentActive: contentActive });
  }

  render() {
    let itemState = this.state.itemState;
    let contentActive = this.state.contentActive;
    return (
      <section id="experience-component">
        <div data-aos="fade-left" data-aos-duration="3000" className="experience-text">Experience</div>
        <h1 className="experience-header"><span data-aos="fade-right" className="subtext">growing </span><span data-aos="fade-up">Professional Experience</span></h1>
        <p className="experience-page-intro">
        </p>
        <div className="experience-section">
          <div className="accordian">


            <div className="accordian-item" data-aos="fade-up">
              <div className="accordian-item-title-wrapper">
                <h6>
                  <div className="accordian-item-title">
                    <span>Software Engineer @ <span className="no-wrap">Guild Mortgage LLC</span> &nbsp;&nbsp;</span>
                    <span>2020-2022</span>
                  </div>
                </h6>
                <div className="firstItem accordian-expand-button" onClick={this.handleAccordian}>
                  <p>&#43;</p>
                </div>
              </div>
            </div>
            <div
              className={`accordian-content content-${contentActive.firstItem}`}>
              <div className={`accordian-details accordian-${contentActive.firstItem}`}>
                <div className="company-info">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                    </svg>
                    California, USA
                  </span>
                  <span><a href="https://www.guildmortgage.com" target="_blank" rel="noreferrer"> &nbsp; guildmortgage.com</a></span>
                </div>
                <div className="job-description">
                  Developing frontend and backend solutions for B2B Mortgaging
                  and Lending partners on the IBM stack.
                </div>
                <div className="job-technologies">
                  <ul>
                    <li>Javascript</li>
                    <li>IBM RPGLE</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Relational Databases</li>
                  </ul>
                </div>
              </div>
              <div className="logo-container guildmortgage-logo-container">
                <div className="company-logo guildmortgage-logo-wrapper">
                  <img className={`guild-${contentActive.firstItem}`} src={guildLogo} alt="Guild-Mortgage" />
                </div>
              </div>
            </div>

            <div className="accordian-item" data-aos="fade-up">
              <div className="accordian-item-title-wrapper">
                <h6>
                  <div className="accordian-item-title">
                    <span>Client Support Engineer @ <span className="no-wrap">Supply Pro</span> &nbsp;&nbsp;</span>
                    <span>2019-2020</span>
                  </div>
                </h6>
                <div className="secondItem accordian-expand-button" onClick={this.handleAccordian}>
                  <p>&#43;</p>
                </div>
              </div>
            </div>
            <div
              className={`accordian-content content-${contentActive.secondItem}`}>
              <div className={`accordian-details accordian-${contentActive.secondItem}`}>
                <div className="company-info">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                    </svg>
                    California, USA
                  </span>
                  <span><a href="https://supplypro.com/" target="_blank" rel="noreferrer"> &nbsp; supplypro.com</a></span>
                </div>
                <div className="job-description">
                  On call assisting on-the-ground internal and 3rd party mechanical engineers with proprietary software and hardware issues
                </div>
                <div className="job-technologies">
                  <ul>
                    <li>SQL</li>
                    <li>Proprietary CMS</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </div>

              <div className="logo-container supplypro-logo-container">
                <div className="company-logo supplypro-logo-wrapper">
                  <img className={`supplyPro-${contentActive.secondItem}`} src={supploproLogo} alt="SupplyPro" /></div>
              </div>
            </div>

            <div className="accordian-item" data-aos="fade-up">
              <div className="accordian-item-title-wrapper">
                <h6>
                  <div className="accordian-item-title">
                    <span>Client Technical Engineer @ iMatrix &nbsp;&nbsp;</span>
                    <span>2018-2019</span>
                  </div>
                </h6>
                <div className="thirdItem accordian-expand-button" onClick={this.handleAccordian}>
                  <p>&#43;</p>
                </div>
              </div>
            </div>
            <div
              className={`accordian-content content-${contentActive.thirdItem}`}>
              <div className={`accordian-details accordian-${contentActive.thirdItem}`}>
                <div className="company-info">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                    </svg>
                    California, USA
                  </span>
                  <span>
                    <a href="https://imatrix.com/" target="_blank" rel="noreferrer"> &nbsp; imatrix.com</a>
                  </span>
                </div>
                <div className="job-description">
                  Developing websites for clients and private businesses practices in Healthcare. Often On-call and live programming while building rapport directly with website owner.
                </div>
                <div className="job-technologies">
                  <ul>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>DNS</li>
                    <li>SEO</li>
                  </ul>
                </div>
              </div>
              <div className="logo-container imatrix-logo-container">
                <div className="company-logo imatrix-logo-wrapper">
                  <img className={`iMatrix-${contentActive.thirdItem}`} src={iMatrixLogo} alt="Guild-Mortgage" />
                </div>
              </div>
            </div>

          </div>
        </div >
        <div className="experience-animation-wrapper">
        </div>
      </section >
    );
  }
}

export default Experience;
