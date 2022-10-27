/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './ArtOfTwitchChat.sass';
import '../global-pages.sass';


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
        <a href="https://art-of-twitch.herokuapp.com/" target="_blank" rel="noreferrer"><h1>Art Of Twitch Chat</h1></a>
        <p>Render Art from your favorite streamer&apos;s chat room.</p>
        <br />
        <h3>Mission</h3>
        <p>
          I wanted  to combine an exciting new technology that&apos;s been on everyone&apos;s
          radar recently with a favorite passtime of mine;

          a marriage of <br /><span className="bolded">text-prompted AI Generated Art</span> and <span className="bolded">Twitch.tv!</span>
        </p>
        <a href="https://art-of-twitch.herokuapp.com/" target="_blank" rel="noreferrer">
          <div className="artoftwitchchat-link">Check it out!</div>
        </a>
        <h3>Technologies</h3>
        <p>ReactJS, NodeJS, Python, Amazon Web Services: S3. Deployed on Heroku</p>
        <p>Twitch API, Dreamstudio API</p>
        <p></p>
      </div>
    );
  }
}

