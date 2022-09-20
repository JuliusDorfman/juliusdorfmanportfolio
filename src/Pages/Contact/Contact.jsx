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
      <h1>Contact Me</h1>
      <form>

      </form>
    </div>
  )
}

}