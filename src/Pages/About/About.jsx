import React from 'react';
import Timmy from '../../Assets/Timmy.jpg';
import './About.scss';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
      page: 'about',
      skillsFormation: 'bubble',
      skillsList: 'hide',
      selectedRadio: [true, false, false, false],
      selected: "1",
      secretKey: [1],
      secretFormation: '',
      secretFaces: [" ˘ ͜ʖ ˘", "•̀.̫ •́✧",
        "⚈ ̫ ⚈", "-ω-", " `˙ ͜ʟ˙`"],
      secretFaceSelected: 1,
      waves: false,
      X: null,
      Y: null,
      // retractedDoors: false,
    };
  }

  handleMouseMove = (e) => {
    // const speechBubble = document.querySelector(".speech-bubble");
    const timmyParent = document.querySelector(".timmy-parent");
    const parentBubblePost = timmyParent.getBoundingClientRect();

    const topLeftPosition = {
      x: parentBubblePost.left,
      y: parentBubblePost.top
    }

    let X = e.clientX - topLeftPosition.x - 200
    let Y = e.clientY - topLeftPosition.y
    requestAnimationFrame((x, y) => {
      this.setState({
        X: X,
        Y: Y,
      });
    })
  }

  handleCelebration = () => {
    this.getRandomNumberExcluding = (min, max, excluded, mode) => {
      if (mode === "face") {
        let randomNumber = Math.floor(Math.random() * (max - min + 1));
        while (randomNumber === excluded) {
          randomNumber = this.getRandomNumberExcluding(min, max, excluded, mode)
        }
        return randomNumber;
      } else if (mode === "formation") {
        let randomNumber = Math.floor(Math.random() * max - min + 1);
        while (randomNumber === excluded) {
          randomNumber = this.getRandomNumberExcluding(min, max, excluded, mode)
        }
        return randomNumber;
      }
    }

    this.selectRandomSecretFace = () => {
      let mode = "face"
      const { secretFaces, secretFaceSelected } = this.state;
      const randomNumber = this.getRandomNumberExcluding(0, secretFaces.length - 1, secretFaceSelected, mode);
      this.setState({ secretFaceSelected: randomNumber });
    }

    this.selectRandomSecretFormation = () => {
      let mode = "formation"
      const { secretFormation } = this.state;
      const randomNumber = this.getRandomNumberExcluding(0, 4, secretFormation, mode);
      this.setState({ secretFormation: randomNumber });
    }

    this.selectRandomSecretFace();
    this.selectRandomSecretFormation();
    // Do something with canvas or threejs here
  }



  handleRadio = (e) => {
    let options = document.getElementsByClassName("options")[0];
    let selectedRadioValue = e.target.value;
    let selectedRadio = [false, false, false, false];
    let { waves } = this.state;
    let { secretKey } = this.state;
    if (waves) {
      clearTimeout(this.wavesTimeout);
      this.setState({ waves: false });
      return
    } else {
      waves = (waves === true) ? false : true;
      this.setState({ selected: selectedRadioValue });
    }

    this.setState({ selectedRadio: selectedRadio });
    switch (selectedRadioValue) {
      case "1":
        options.style.left = "-85%"
        secretKey.push(1);
        break;
      case "2":
        options.style.left = "-118%"
        secretKey.push(2);
        break;
      case "3":
        options.style.left = "-151%"
        secretKey.push(3);
        break;
      case "4":
        options.style.left = "-184%"
        secretKey.push(4);
        break;
      default:
        options.style.left = "-85%"
    }
    selectedRadio[selectedRadioValue - 1] = true
    this.wavesTimeout = setTimeout(() => {
      this.setState({ waves: !waves })
    }, 1500);
    secretKey.sort((a, b) => a - b)
    secretKey = [...new Set(secretKey)];
    this.setState({
      waves: waves,
      secretKey: secretKey
    });
  }

  retractDoors = () => {
    let { retractedDoors } = this.state;
    retractedDoors = (retractedDoors === true) ? false : true;
    this.setState({ retractedDoors: retractedDoors });
    console.log(retractedDoors);
  }



  render() {
    let { selectedRadio } = this.state;
    let { waves } = this.state;
    let { selected } = this.state;
    // let { X } = this.state;
    // let { Y } = this.state;
    let secretKey = this.state.secretKey.join("");
    let { secretFormation } = this.state;
    let { secretFaces } = this.state;
    let { secretFaceSelected } = this.state;
    let { retractedDoors } = this.state;

    return (
      <section id="about-component">
        <div data-aos="fade-left" data-aos-duration="3000"
          className="about-text">ABOUT <br />ME
        </div>
        <h1 className="about-me-header cursor-default">
          <span data-aos="fade-right" className="subtext">a little</span>
          <span data-aos="fade-up">About Me</span>
        </h1>
        <div className={`about-me-section`}>

          <div className="about-me-navigator-container">
            <div className="about-me-navigator">

              {/* Button to Open Door */}

              <div
                className={`door-button door-button-${retractedDoors}`}
                onClick={this.retractDoors} >
              </div>

              {/* Doors to Navigation Buttons */}
              <div className={`retractable-door-1 retracted-${retractedDoors}`}>
                {/* These doors will float 6 doors that will spin and melt */}
              </div>
              <div className={`retractable-door-2 retracted-${retractedDoors}`}>
                {/* These doors will float 6 doors that will spin and melt */}
              </div>

              {/* Radio Buttons for navigation */}
              <div onChange={this.handleRadio} className="radio-container">
                <div className="radio__1">
                  <input id="radio-1" className={`radio-${selectedRadio[0]}-selected`} type="radio" name="radio" value="1" defaultChecked disabled={this.state.waves} />
                  <label htmlFor="radio-1"></label>
                </div>

                <div className="radio__2">
                  <input id="radio-2" className={`radio-${selectedRadio[1]}-selected`} type="radio" name="radio" value="2" disabled={this.state.waves} />
                  <label htmlFor="radio-2"></label>
                </div>

                <div className="radio__3">
                  <input id="radio-3" className={`radio-${selectedRadio[2]}-selected`} type="radio" name="radio" value="3" disabled={this.state.waves} />
                  <label htmlFor="radio-3"></label>
                </div>

                <div className="radio__4">
                  <input id="radio-4" className={`radio-${selectedRadio[3]}-selected`} type="radio" name="radio" value="4" disabled={this.state.waves} />
                  <label htmlFor="radio-4"></label>
                </div>
              </div>
            </div>

          </div>

          <div className="about-me-content-container">

            <div className={`interactive-disk secret-formation-${secretFormation}`}>

              <div className={`circle waves-${waves}`}>
                <span className="circle__btn">
                </span>
                <span className="circle__back-1"></span>
                <span className="circle__back-2"></span>
              </div>

              <div className="options-wrapper cursor-default">
                <div className="options">
                  <ul>
                    <li>About</li>
                    <li>Expertise</li>
                    <li>Interests</li>
                    <li>Secret</li>
                  </ul>
                  <ul>
                    <li>About</li>
                    <li>Expertise</li>
                    <li>Interests</li>
                    <li>Secret</li>
                  </ul>
                  <ul>
                    <li>About</li>
                    <li>Expertise</li>
                    <li>Interests</li>
                    <li>Secret</li>
                  </ul>
                </div>
              </div>

              <svg className="options-indicator" width="100" height="100">
                <defs>
                  <linearGradient id="myGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="50%" stopColor="#ff0000" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                </defs>
                <path d="M50,0 L100,100 L0,100 Z" fill="url(#myGradient)" />
              </svg>

              {(() => {
                switch (selected) {
                  case "1":
                    return (
                      <div className={`about-content-intro selection-anim-${waves} cursor-default`}>
                        <h3>Hello,</h3>
                        <p className={`about-me-page-intro`}>
                          My name is Julius. I'm a developer passionate about&nbsp;
                          <span className="bolded highlighted-text">all things web</span>.
                          Fortunately, my hobbies, interests, and career have all culminated in
                          the accumulation of years of <span className="bolded highlighted-text">front-end</span>, <span className="bolded highlighted-text">back-end</span>, <span className="bolded highlighted-text">cloud</span>, and <span className="bolded highlighted-text">client-facing experience</span>.
                          <br />
                          <br />
                          This website is where I publish my works; an expression of my creativity through design, code, and writing. While you&apos;re here, <span className="bolded highlighted-text">thank you</span> for being a part of it.
                        </p>
                      </div>
                    )
                  case "2":
                    return (
                      <div className={`about-content-intro about-content-technologies selection-anim-${waves} cursor-default`}>
                        <h3 className="about-technologies-header">
                          <span className="subtext">
                            A few of the
                            <br />
                          </span>
                          Technologies
                          <br />
                          <span className="post-subtext subtext">
                            I wield
                          </span>
                        </h3>
                        <div className={`about-me-page-intro selection-anim-${waves} cursor-default`}>
                          <br />
                          <br />
                          <ul className="technologies-list">
                            <li>Javascript &#40;ES6+&#41;</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Typescript</li>
                            <li>SQL&#47;Relational Databases</li>
                            <li>MongoDB&#47;Distrubuted Databases</li>
                            <li>AWS Services</li>
                          </ul>
                        </div>
                      </div>
                    )
                  case "3":
                    return (
                      <div className={`about-content-intro about-content-interests selection-anim-${waves} cursor-default`}>
                        <div className={`about-me-page-intro`}>
                          <p>
                            <span style={{ color: "#9A6B9A" }}>function&nbsp;</span>
                            <span style={{ color: "#DCDCAA" }}>hobbiesAfterHours</span>
                            <span style={{ color: "#E9C502" }}>&#40;&#41;&nbsp;</span>
                            <span style={{ color: "#9A6B9A" }}>&#123;</span>
                            <br />
                            <span style={{ color: "#9A6B9A" }}>&nbsp;while&nbsp;</span>
                            <span style={{ color: "#E9C502" }}>&#40;&nbsp;</span>
                            <span style={{ color: "#86BBD8" }}>time.afterHours&nbsp;</span>
                            <span style={{ color: "#E9C502" }}>&#41;&nbsp;</span>
                            <span style={{ color: "#9A6B9A" }}>&#123;</span>
                            <br />
                            <span style={{ color: "#9A6B9A" }}>&nbsp;&nbsp;&nbsp;if &nbsp;</span>
                            <span style={{ color: "#E9C502" }}>&#40;&nbsp;</span>
                            <span style={{ color: "#86BBD8" }}>!julius.programming&nbsp;</span>
                            <span style={{ color: "#E9C502" }}>&#41;&nbsp;</span>
                            <span style={{ color: "#9A6B9A" }}>&#123;</span>
                            <br />
                            <span style={{ color: "#DCDCAA" }}>&nbsp;&nbsp;&nbsp;julius.hobbies = ["<span style={{ color: "#FF3336" }}>gym</span>", "<span style={{ color: "#FF3336" }}>gaming</span>", "<span style={{ color: "#FF3336" }}>piano</span>"];</span>
                            <br />
                            <span style={{ color: "#9A6B9A" }}>&nbsp;&nbsp;&nbsp;&#125;</span>
                            <br />
                            <span style={{ color: "#DCDCAA" }}>&nbsp;&nbsp;julius.enjoyLife();</span>
                            <br />
                            <span style={{ color: "#9A6B9A" }}>&nbsp;&#125;</span>
                            <br />
                            <span style={{ color: "#9A6B9A" }}>&#125;</span>

                          </p>
                          <br />
                        </div>
                        <div onMouseMove={this.handleMouseMove} className="timmy-parent">
                          <div className="timmy-img-wrapper">
                            <img id="timmy" src={Timmy} alt="My dog, Timmy" />
                          </div>
                          <span className="timmy__back-1" ></span>
                          <span className="timmy__back-2" ></span>
                          {/* <span className="speech-bubble" style={{ left: `${X}px`, top: `${Y}px` }}>Hi, I'm Timmy! &#128054;</span> */}
                          <span className="speech-bubble">Hi, I'm Timmy! &#128054;</span>

                        </div>
                      </div>
                    )
                  case "4":
                    if (secretKey === "1234") {
                      return (
                        <div className={`about-content-intro secret-yes selection-anim-${waves} cursor-default`}>
                          <div className="secret-congratulations">
                            You clicked all the buttons! Now click this one.
                          </div>
                          <div
                            onClick={this.handleCelebration}
                            className="celebration-button-wrapper">
                            <div className="celebration-button">{secretFaces[secretFaceSelected]}</div>
                            <span className="celebration-button__waves-1"></span>
                            <span className="celebration-button__waves-2"></span>
                          </div>
                          {/* <canvas id="celebration-canvas">

                          </canvas> */}
                        </div>
                      )
                    } else {
                      return (
                        <div className={`about-content-intro secret-not-yet selection-anim-${waves} cursor-default`}>
                          <p className={`about-me-page-intro`}>
                            <br />
                            Come back when you've clicked all 4 buttons
                            <br />
                            <br />
                            ¯\_&#40;ツ&#41;_/¯
                            <br />
                          </p>
                        </div>
                      )
                    }
                  default:
                    return (
                      <div className={`about-content-intro selection-anim-${waves}`}>
                        <h3>Hello,</h3>
                        <p className={`about-me-page-intro`}>
                          My name is Julius. I'm a developer passionate about <span className="bolded highlighted-text">all things web</span>. Fortunately, my hobbies, interests, and career have all culminated in the accumulation of years of front-end, back-end, cloud, and client-facing experience.
                          <br />
                          <br />
                          This website is where I publish my works; an expression of my creativity through design, code, and writing. While you&apos;re here, <span className="bolded highlighted-text">thank you</span> for being a part of it.
                        </p>
                      </div>
                    )
                }
              })()
              }
            </div>
          </div>
        </div >
      </section >
    );
  }
}

