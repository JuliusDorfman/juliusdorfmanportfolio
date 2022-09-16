import React from 'react';
import logo from './logo.svg';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import FullScreenSidebar from './Components/FullScreenSidebar';
import Skills from './Pages/Skills';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      burgerOpen: false,
      burgerClass: '',
      navBorderToggle: '',
      fadeIn: 'fade-in',
      currentPage: "homepage",
      pageRender: "not-rendered",
      pageToRender: this.props.currentPage
    };
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
        });
    });
  }

  handleCurrentPage = (pageValue) => {
    this.setState({currentPage: pageValue});
  }

  render(){

    const currentPage = this.state.currentPage;
    const fadeClass = this.state.fadeIn === 'fade-out' ? 'fade-in' : 'fade-out';
    const pageRender = this.state.pageRender;

    return (
      <div className="App">
        <header className="App-header">
          <button id="nav-button" className={`nav-border${this.state.navBorderToggle}`} onClick={this.toggleNav}><div className={`nav-burger ${this.state.burgerClass}`}></div></button>
          {this.state.menuOpen ? 
            <div className={`nav-comp-wrap ${fadeClass}`}>
              <Navbar currentPage={currentPage} />
            </div> : null}
          <div id="page-rendered">
            <FullScreenSidebar currentPage={currentPage} toggleHide={this.state.fadeIn} handleCurrentPage={this.handleCurrentPage}/>
            {(() => {
            switch(this.state.currentPage) {
              case 'homepage':
              return (
                <Homepage currentPage={currentPage} pageRender={pageRender} toggleHide={this.state.fadeIn} />
              );
              case 'about':
              return (
                <About currentPage={currentPage} pageRender={this.state.pageRender} />
              )
              case 'skills':
                return (
                  <Skills currentPage={currentPage} pageRender={this.state.pageRender} />
                )
              default: <Homepage currentPage={currentPage} pageRender={pageRender} toggleHide={this.state.fadeIn} />;
              }
            })()
          }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
