import React from 'react';
import logo from './logo.svg';
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import FullScreenSidebar from './Components/FullScreenSidebar';
import './App.css';
import { taggedTemplateExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      burgerOpen: false,
      burgerClass: '',
      navBorderToggle: '',
      fadeIn: 'fade-in',
      currentPage: "About"
    }
  }

  toggleNav = (e) => {
    // Toggle Menu Links
    this.setState({menuOpen: !this.state.menuOpen});

    // Burger Animation
    this.setState({burgerOpen: !this.state.burgerOpen}, (e) => {
        this.setState({burgerClass: this.state.burgerOpen ? 'burgerAnimate' : ''});
        this.setState({navBorderToggle: this.state.burgerOpen ? '-transparent' : ''}, (e) => {
          setTimeout(()=> {
            this.setState({fadeIn: this.state.fadeIn === 'fade-out' ? 'fade-in' : 'fade-out'})
          }, .1)
          console.log('state', this.state);
        });
    });
  }
 
  render(){
    const currentPage = this.state.currentPage;
    // const fadeClass = this.state.fadeIn === 'fade-out' ? 'fade-in' : 'fade-out';
    const fadeClass = this.state.fadeIn === 'fade-out' ? 'fade-in' : 'fade-out';
    return (
      <div className="App">
        <header className="App-header">
          <button id="nav-button" className={`nav-border${this.state.navBorderToggle}`} onClick={this.toggleNav}><div className={`nav-burger ${this.state.burgerClass}`}></div></button>
          {this.state.menuOpen ? 
            <div className={`nav-comp-wrap ${fadeClass}`}>
              <Navbar />
            </div> : ''}
          <div id="page-rendered">
            <FullScreenSidebar currentPage={currentPage} />
            <Homepage />
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
