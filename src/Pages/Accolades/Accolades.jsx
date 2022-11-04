import React, { Component } from 'react';
import './Accolades.css';
const imatrix1 = require('../../Assets/iMatrix1.png');
const imatrix2 = require('../../Assets/iMatrix2.png');
const imatrix3 = require('../../Assets/iMatrix3.png');

export default class Accolades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      currentPage: this.props.currentPage,
      page: 'accolades',
    };

  }

  render() {
    return (
      <section id='accolades-component'>

        <h1>Accolades</h1>
        <div></div>
        <p></p>
        <div className="accolades-text">
          ACCOLADES
        </div>

        <div className="accolades-content">

          <div className="contact-action">
            <h4>Available for select freelance opportunities</h4>
            <h6>
              Have an exciting project you need help with?
              Send me an email or contact me via instant message!
            </h6>
            <footer>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/in/juliusgdorfman/" target="_blank" rel='noreferrer'>linkedin</a></li>
              <li><a href="https://github.com/JuliusDorfman" target="_blank" rel='noreferrer'>github</a></li>
            </ul>
            </footer>
          </div>

          <div className="accolades-grid">
            <div className="accolades accolade-1">
              <span className="quotes">
                <svg viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              <p>
                Julius was kind enough to take my call at just a couple minutes before closing on Friday.
                He patiently waited for me to access documents and photos that needed uploading, and then promised results first thing on Monday.
                All of the website changes were completed to a T and documents uploaded before I checked on Monday at 6:30 am.
              </p>
              <p>
                - Bambi Fletcher
                <br />
                Matrix Client
              </p>
            </div>
            <div className="accolades accolade-2">
              <span className="quotes">
                <svg viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              <p>
                Julius is one of the technicians at iMatrix. He listened carefully to all of our changes
                and applied them accurately and in real time. Great job, Julius!
              </p>
              <p>
                - Glen Matejka
                <br />
                Matrix Client
              </p>
            </div>
            <div className="accolades accolade-3">
              <span className="quotes">
                <svg viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
              </span>
              <p>
                Julius WAS AWESOME!!! Prompt, fast, couteous, service. Every instruction was followed
                perfect!!!!!
              </p>
              <p>
                - Bambi Fletcher
                <br />
                Matrix Client
              </p>
            </div>
            <div className="accolade-4">

            </div>
          </div>
        </div>

      </section>
    )
  };
}
