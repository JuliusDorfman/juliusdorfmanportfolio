import React from 'react';
// import logo from './logo.svg';
import Homepage from './Pages/Homepage';
import Work from './Pages/Work';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import FullScreenSidebar from './Components/FullScreenSidebar';
import Skills from './Pages/Skills';
import Appbackground from './Components/Appbackground';
// import Contact from './Pages/Contact';
import ArtOfTwitchChat from './Pages/ArtOfTwitchChat';
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
      currentPage: 'homepage',
      pageRender: 'not-rendered',
      // pageToRender: this.props.currentPage,
      fullpageAnimation: 'page-in',
      floaters: true,
    };
  }


  toggleNav = () => {
    // Toggle Menu Links
    this.setState({ menuOpen: !this.state.menuOpen });

    // Burger Animation
    this.setState({ burgerOpen: !this.state.burgerOpen }, () => {
      this.setState({ burgerClass: this.state.burgerOpen ? 'burgerAnimate' : '' });
      this.setState({ navBorderToggle: this.state.burgerOpen ? '-transparent' : '' }, () => {
        setTimeout(() => {
          this.setState({ fadeIn: this.state.fadeIn === 'fade-out' ? 'fade-in' : 'fade-out' });
        }, .1);
      });
    });
  };

  handleCurrentPage = (pageValue) => {
    
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    });

    if (this.state.currentPage !== pageValue) {
      this.setState({ fullpageAnimation: 'page-out' }, () => {
        setTimeout(() => {
          this.setState({ fullpageAnimation: 'page-in' }, () => {
            this.setState({ currentPage: pageValue });
          });
        }, 500);
      });
      clearTimeout();
    } else {
      this.setState({ fullpageAnimation: 'page-in' });
    }
  };

  handleToggleFloaters = () => {
    let floaters = this.state.floaters ? false : true;

    this.setState({ floaters: floaters });
  };



  render() {

    const currentPage = this.state.currentPage;
    const fadeClass = this.state.fadeIn === 'fade-out' ? 'fade-in' : 'fade-out';
    const pageRender = this.state.pageRender;


    return (
      <div className="App">
        <header className="App-header">
          <button id="nav-button" className={`nav-border${this.state.navBorderToggle}`} onClick={this.toggleNav}><div className={`nav-burger ${this.state.burgerClass}`}></div></button>
          {this.state.menuOpen ?
            <div className={`nav-comp-wrap ${fadeClass}`}>
              <Navbar currentPage={currentPage} handleCurrentPage={this.handleCurrentPage} toggleNav={this.toggleNav} floaters={this.state.floaters} toggleFloaters={this.handleToggleFloaters}/>
            </div> : null}
          <div id="page-rendered">
            <FullScreenSidebar currentPage={currentPage} toggleHide={this.state.fadeIn} handleCurrentPage={this.handleCurrentPage} toggleFloaters={this.handleToggleFloaters} floaters={this.state.floaters} />
            {(() => {
              switch (this.state.currentPage) {
              case 'homepage':
                return (
                  <section className={`fullpage-animations-${this.state.fullpageAnimation}`}>
                    <Homepage currentPage={currentPage} pageRender={pageRender} toggleHide={this.state.fadeIn} handleCurrentPage={this.handleCurrentPage} />
                  </section>
                );
              case 'about':
                return (
                  <section className={`fullpage-animations-${this.state.fullpageAnimation}`}>
                    <About currentPage={currentPage} pageRender={this.state.pageRender} handleCurrentPage={this.handleCurrentPage} />
                  </section>
                );
              case 'skills':
                return (
                  <section className={`fullpage-animations-${this.state.fullpageAnimation}`}>
                    <Skills currentPage={currentPage} pageRender={this.state.pageRender} />
                  </section>
                );
              case 'work':
                return (
                  <section className={`fullpage-animations-${this.state.fullpageAnimation}`}>
                    <Work currentPage={currentPage} pageRender={this.state.pageRender} handleCurrentPage={this.handleCurrentPage} />
                  </section>
                );
                // case 'contact':
                //   return (
                //     <section className={`fullpage-animations-${this.state.fullpageAnimation}`}>  
                //       <Contact currentPage={currentPage} pageRender={this.state.pageRender} />
                //     </section>
                // ); 
              case 'artoftwitchchat':
                return (
                  <section className={`fullpage-animations-${this.state.fullpageAnimation}`}>
                    <ArtOfTwitchChat currentPage={currentPage} pageRender={this.state.pageRender} />
                  </section>
                );
              default:
                return (
                  <Homepage currentPage={currentPage} pageRender={pageRender} toggleHide={this.state.fadeIn} handleCurrentPage={this.handleCurrentPage} />
                );
              }
            })()
            }
          </div>
        </header>
        {this.state.floaters
          ?
          <Appbackground />
          :
          null
        }
      </div>
    );
  }
}

export default App;
