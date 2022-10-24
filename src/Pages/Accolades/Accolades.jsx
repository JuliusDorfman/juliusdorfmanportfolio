import React, { Component } from 'react';
import './Accolades.css';

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
      </section>
    )
  };
}
