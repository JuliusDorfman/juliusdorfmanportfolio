import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "contact"
    }
  }


render() {
  return (
    <div id="contact-component">
      <div className="contact-text">CONTACT</div>
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="form-top">
          <label for="name">
            <input type="text" name="name" placeholder="Name"></input>
          </label>
          <label for="email">
            <input type="text" name="email" placeholder="Email"></input>
          </label>
        </div>
        <div className="form-bottom">
          <label for="subject">
            <input type="text" name="subject" placeholder="Subject"></input>
          </label>
          <label for="message">
            <input type="text" name="message" placeholder="Message"></input>
          </label>
        </div>
        <div className="form-submit-wrapper">
          <div> </div>
          <div> </div>
          <input className="contact-submit"for="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

}