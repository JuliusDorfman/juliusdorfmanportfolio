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
      reference: {
        reference1: false,
        reference2: false,
        reference3: false,
      }
    };
  }


  handleShowReference = (e) => {
    let referenceValue = e.target.getAttribute("refvalue");

    let reference = {
      reference1: this.state.reference.reference1,
      reference2: this.state.reference.reference2,
      reference3: this.state.reference.reference3,
    }

    reference[referenceValue] = reference[referenceValue] ? false : true;

    this.setState({ reference: reference }, () => {
      // console.log(this.state.reference)
    });

  }

  render() {
    const quoteReference = this.state.reference;
    return (
      <section id='accolades-component'>

        <h1 data-aos="fade-up" data-aos-duration="3000">
          <span data-aos="fade-right" className="subtext">Proud </span>
          Accolades
        </h1>
        <div data-aos="fade-left" data-aos-duration="3000" className="accolades-text">
          ACCOLADES
        </div>

        <div className="accolades-content">

          <div className="contact-action">
            <h4>Available for select freelance opportunities</h4>
            <h6>
              Have an exciting project you need help with?
              Shoot me a message on Linkedin!
            </h6>
            <footer>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/in/juliusgdorfman/" target="_blank" rel='noreferrer'>linkedin</a></li>
                <li><a href="https://github.com/JuliusDorfman" target="_blank" rel='noreferrer'>github</a></li>
                <li><a href="https://codepen.io/juliusdorfman" target="_blank" rel='noreferrer'>codepen</a></li>
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
              <div className="attributed-to">
                <p>
                  - Bambi Fletcher
                  <br />
                  Matrix Client
                </p>
                <div className="reference-button">
                  <svg refvalue="reference1" onClick={this.handleShowReference} viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                </div>
              </div>
              <img className={`quote-${quoteReference.reference1}`} src={imatrix1} alt="reference-1" />
              <img className={`quote-${quoteReference.reference2}`} src={imatrix2} alt="reference-2" />
              <img className={`quote-${quoteReference.reference3}`} src={imatrix3} alt="reference-3" />
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
              <div className="attributed-to">
                <p>
                  - Ken Zierler
                  <br />
                  Matrix Client
                </p>
                <div className="reference-button">
                  <svg refvalue="reference2" onClick={this.handleShowReference} viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                </div>
              </div>
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
              <div className="attributed-to">
                <p>
                  - Glen Matejka
                  <br />
                  Matrix Client
                </p>
                <div className="reference-button">
                  <svg refvalue="reference3" onClick={this.handleShowReference} viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="accolade-4">
            </div>
          </div>
        </div>

      </section>
    )
  };
}
