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
    let userInput = e.target.value;
    this.setState({[userInput]: userInput}, ()=>{
      console.log(userInput)
    });
    
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const {inputName, inputEmail, inputSubject, inputMessage } = e.target.elements;
    let details = {
      inputName: inputName.value,
      inputEmail: inputEmail.value,
      inputSubject: inputSubject.value,
      inputMessage: inputMessage.value
    }

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type":"application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    console.log('details', details);
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
            <input type="text" name="name" placeholder="Name" formvalue="name" onChange={(e)=>{this.handleInput(e)}}></input>
          </label>
          <label htmlFor="email">
            <input type="text" name="email" placeholder="Email" formvalue="email" onChange={(e)=>{this.handleInput(e)}}></input>
          </label>
        </div>
        <div className="form-bottom">
          <label htmlFor="subject">
            <input type="text" name="subject" placeholder="Subject" formvalue="subject" onChange={(e)=>{this.handleInput(e)}}></input>
          </label>
          <label htmlFor="message">
            <textarea type="text" name="message" placeholder="Message" formvalue="message" onChange={(e)=>{this.handleInput(e)}}></textarea>
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