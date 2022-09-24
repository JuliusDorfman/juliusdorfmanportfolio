import React from 'react';
import './Contact.css';
import htmlTagClose from '../../Assets/html-tag-closed-2.png';
import formTagOpen from '../../Assets/form-tag-open-2.png';
import formTagClose from '../../Assets/form-tag-closed-2.png';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: "contact",
      inputName: '',
      inputEmail: '',
      inputSubject: '',
      inputMessage: ''
    }
  }

  handleInput = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  }



render() {
  return (
    <div id="contact-component">
      <div className="contact-text">CONTACT</div>
      <h1>Contact Me</h1>
      <form className="contact-form">
      <img className={`contact-flavor-tag-open contact-form-flavor-tag-open flavor-tags-${this.props.toggleHide}`} src={formTagOpen} alt="flavor-tag-form"/>
        <div className="form-top">
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Name" onChange={(e)=>{this.handleInput(e)}}></input>
          </label>
          <label htmlFor="email">
            <input type="text" name="email" placeholder="Email" onChange={(e)=>{this.handleInput(e)}}></input>
          </label>
        </div>
        <div className="form-bottom">
          <label htmlFor="subject">
            <input type="text" name="subject" placeholder="Subject" onChange={(e)=>{this.handleInput(e)}}></input>
          </label>
          <label htmlFor="message">
            <textarea type="text" name="message" placeholder="Message" onChange={(e)=>{this.handleInput(e)}}></textarea>
          </label>
        </div>
        <div className="form-submit-wrapper">
          <div> </div>
          <div> </div>
          <input className="contact-submit" htmlFor="submit" type="submit" value="Submit" onClick={(e)=> {this.handleSubmit(e)}} />
        </div>
        <img className={`contact-flavor-tag-close contact-form-flavor-tag-close flavor-tags-${this.props.toggleHide}`} src={formTagClose} alt="flavor-tag-form"/>
      </form>
      <img className={`contact-flavor-tag-close contact-html-tag-close flavor-tags-${this.props.toggleHide}`} src={htmlTagClose} alt="flavor-tag-html"/>
    </div>
  )
}

}