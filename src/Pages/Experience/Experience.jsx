import React from 'react';
import './Experience.scss';
const guildLogo = require('../../Assets/Guild-Logo.png');
const supploproLogo = require('../../Assets/supplypro-logo.png');
const iMatrixLogo = require('../../Assets/imatrix_logo.png');

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentActive: {
        firstItem: true,
        secondItem: false,
        thirdItem: false
      }
    }
  }

  handleModule = (e) => {
    console.log("clicked")
    let itemSelected = e.target.dataset.name;
    console.log("itemSelected", itemSelected);
    let contentActive = {
      firstItem: false,
      secondItem: false,
      thirdItem: false,
    }

    contentActive[itemSelected] = contentActive[itemSelected] ? false : true;
    this.setState({ contentActive: contentActive });
  }

  render() {
    let { firstItem, secondItem, thirdItem } = this.state.contentActive;
    return (
      <section id="experience-component">
        <div data-aos="fade-left" data-aos-duration="3000" className="experience-text">Experience</div>
        <h1 className="experience-header cursor-default"><span data-aos="fade-right" className="subtext">growing </span><span data-aos="fade-up">Experience</span></h1>

        <div className="experience-module-container">
          <div className="experience-module">
            <div className="experience-sidebar-wrapper">
              <ul className="experience-sidebar">
                <li onClick={this.handleModule}
                  data-name="firstItem"
                  className={`button-active-${firstItem}`}
                >
                  Guild Mortgage
                </li>
                <li onClick={this.handleModule}
                  data-name="secondItem"
                  className={`button-active-${secondItem}`}
                >
                  Supply Pro
                </li>
                <li onClick={this.handleModule}
                  data-name="thirdItem"
                  className={`button-active-${thirdItem}`}
                >
                  iMatrix
                </li>
              </ul>
            </div>
            <div className="experience-content-wrapper">
              <ul className="company-list">
                <li className={`contentActive-${firstItem}`}>
                  <h3 className="company-title">
                    Software Engineer
                  </h3>
                  <h4 className="company-name">Guild Mortgage</h4>
                  <p className="company-date">
                    Apr 2020 - Sept 2022
                  </p>
                  <ul className="company-description">
                    <li>
                      Write modern, scalable, and well-documented code
                      for both web and non-browser applications.
                    </li>
                    <li>
                      Develop front- and back-end solutions for B2B Mortgaging
                      and Lending partners on the IBM stack.
                    </li>
                    <li>
                      Consistantly collaborate with other developers, clients, and designers,
                      in an Agile environment.
                    </li>
                  </ul>
                </li>
                <li className={`contentActive-${secondItem}`}>
                  <h3 className="company-name">
                    Client Support Engineer
                  </h3>
                  <h4 className="company-name">Supply Pro</h4>
                  <p className="company-date">
                    Jul 2019 - Apr 2020
                  </p>
                  <ul className="company-description">
                    <li>Lead scheduled and impromptu phone assistance with on site engineers or
                      ad hoc contacts to troubleshoot software and hardware failures on inventory
                      tracking device</li>
                    <li>Disseminated technical information to non technical individuals regularl</li>
                    <li>Entrusted with Company general management email inbox and communicating
                      with both technical and non technical clients</li>
                  </ul>
                </li>
                <li className={`contentActive-${thirdItem}`}>
                  <h3 className="company-name">
                    Client Technical Support
                  </h3>
                  <h4 className="company-name">iMatrix</h4>
                  <p className="company-date">
                    Sept 2018 - Jul 2019
                  </p>
                  <ul className="company-description">
                    <li>Applied JavaScript, HTML5, CSS3, jQuery and proprietary CMS systems to
                      assist clients with live updates or fixes to custom websites</li>
                    <li>Trusted with assisting Retention Team to handle special and noted client</li>
                    <li>Resolve DNS and domain management issues</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

