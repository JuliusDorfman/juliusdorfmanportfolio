/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './ArtOfTwitchChat.sass';
import '../global-pages.sass';
const twitchIcon = require('../../Assets/twitch-icon.png');
const aottLarge = require('../../Assets/art-of-twitch-chat.png');
const img1 = require('../../Assets/img1.png');
const img2 = require('../../Assets/img2.png');
const img3 = require('../../Assets/img3.png');
const img4 = require('../../Assets/img4.png');
const img5 = require('../../Assets/img5.png');
const img6 = require('../../Assets/img6.png');



export default class ArtOfTwitchChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: 'artoftwitchchat'
    };
  }


  render() {
    return (
      <div id="artoftwitchchat-component" className="product-section">
        <div className="AOTT-text">ART OF
          <br />
          TWITCH CHAT</div>
        <a href="https://art-of-twitch.herokuapp.com/" target="_blank" rel="noreferrer"><h1>Art Of Twitch Chat</h1></a>
        <p>Render Art from your favorite Twitch.tv streamer&apos;s chat room.</p>
        <div className="mission-technology">
          <div className="mission">
            <h3>Mission</h3>
            <p>
              I wanted  to combine an exciting new technology that&apos;s been on everyone&apos;s
              radar recently with a favorite passtime of mine;
              a marriage of <span className="bolded">AI Generated Art</span> and <span className="bolded">Twitch.tv!</span>
            </p>
          </div>
          <div className="technology">
            <h3>Technologies</h3>
            <div className="tech-list-wrapper">
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>Python</li>
                <li>AWS: S3</li>
              </ul>
              <ul>
                <li>Heroku</li>
                <li>Twitch <img className="tech-icon" src={twitchIcon} alt="twitch-icon" /> </li>
                <li>Stable Diffusion</li>
              </ul>
            </div>
          </div>
        </div>
        <a href="https://art-of-twitch.herokuapp.com/" target="_blank" rel="noreferrer">
          <div className="artoftwitchchat-link">Check it out!</div>
        </a>
        <div className="aott-visuals">
          <div className="img-wrapper-gallery">
            <div className="img-wrapper-large">
              <img src={aottLarge} alt="Art of twitch chat preview" />
            </div>
            <div className="indv-img-wrapper">
              <img src={img1} alt="ai-generated-psychadelic" />
            </div>
            <div className="indv-img-wrapper">
              <img src={img2} alt="ai-generated-ancient-relic" />
            </div>
            <div className="indv-img-wrapper">
              <img src={img3} alt="ai-generated-heroine" />
            </div>
            <div className="indv-img-wrapper">
              <img src={img4} alt="ai-generated-female-dancer" />
            </div>
            <div className="indv-img-wrapper">
              <img src={img5} alt="ai-generated-" />
            </div>
            <div className="indv-img-wrapper">
              <img src={img6} alt="ai-generated-" />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

