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
      waves: false,
      X: null,
      Y: null
    };
  }

  handleMouseMove = (e) => {
    const speechBubble = document.querySelector(".speech-bubble");
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

    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    var isMouseDown = false;

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener("resize", function () {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

    });


    window.addEventListener("mousedown", function () {
      isMouseDown = true;
    });

    window.addEventListener("mouseup", function () {
      isMouseDown = false;
    });

    canvas.addEventListener("touchstart", function () {
      isMouseDown = true;
    });

    canvas.addEventListener("touchmove", function (event) {
      event.preventDefault();
      mouse.x = event.touches[0].pageX;
      mouse.y = event.touches[0].pageY;
    });

    canvas.addEventListener("touchend", function () {
      isMouseDown = false;
    });


  }

  componentDidMount = () => {
  }

  componentWillUnmount = () => {
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



  render() {
    let { selectedRadio } = this.state;
    let { waves } = this.state;
    let { selected } = this.state;
    let { X } = this.state;
    let { Y } = this.state;
    let secretKey = this.state.secretKey.join("");
    return (
      <section id="about-component">
        <div data-aos="fade-left" data-aos-duration="3000"
          className="about-text">ABOUT <br />ME
        </div>
        <h1 className="about-me-header cursor-default">
          <span data-aos="fade-right" className="subtext">a little</span>
          <span data-aos="fade-up">About Me</span>
        </h1>
        <div className="about-me-section">
          <div className="about-me-content-container">

            <div className="interactive-disk">

              <div className={`circle waves-${waves}`}>
                <span className="circle__btn">
                </span>
                <span className="circle__back-1"></span>
                <span className="circle__back-2"></span>
              </div>

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
                          My name is Julius. I'm a developer passionate about
                          <span className="bolded highlighted-text">all things web</span>.
                          Fortunately, my hobbies, interests, and career have all culminated in
                          the accumulation of years of <span className="bolded highlighted-text">front-end, back-end, cloud, and client-facing experience</span>.
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
                        <p className={`about-me-page-intro selection-anim-${waves} cursor-default`}>
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
                        </p>
                      </div>
                    )
                  case "3":
                    return (
                      <div className={`about-content-intro about-content-interests selection-anim-${waves} cursor-default`}>
                        <h3>
                          <span style={{ color: "#9A6B9A" }}>if &nbsp;</span>
                          <span style={{ color: "#E9C502" }}>&#40;&nbsp;</span>
                          <span style={{ color: "#86BBD8" }}>!julius.programming&nbsp;</span>
                          <span style={{ color: "#E9C502" }}>&#41;&nbsp;</span>
                          <span style={{ color: "#9A6B9A" }}>&#123;</span>
                          <br />
                        </h3>
                        <div className={`about-me-page-intro`}>
                          <p>
                            After hours, I'm an avid gym goer, gamer, and a middling pianist.
                            <br />
                            <br />
                            I also make sure <span className="bolded highlighted-text">this fella</span> lives a life worthy of dreaming about.
                          </p>
                          <br />
                        </div>
                        <div onMouseMove={this.handleMouseMove} className="timmy-parent">
                          <div className="timmy-img-wrapper">
                            <img id="timmy" src={Timmy} alt="My dog, Timmy" />
                          </div>
                          <span className="timmy__back-1" ></span>
                          <span className="timmy__back-2" ></span>
                          <span className="speech-bubble" style={{ left: `${X}px`, top: `${Y}px` }}>Hi, I'm Timmy! &#128054;</span>

                        </div>
                      </div>
                    )
                  case "4":
                    if (secretKey === "1234") {
                      return (
                        <div className={`about-content-intro secret-yes selection-anim-${waves} cursor-default`}>
                          <div className={`about-me-page-intro`}>
                            You clicked all the buttons! Now click this one.
                            {/* <div class="celebration-button-box">
                              <div class="celebration-button-wrapper">
                                <div class="celebration-button">
                                  <div class="celebration-button-inner">
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                          <div
                            onClick={this.handleCelebration}
                            className="celebration-button-wrapper">
                            <div className="celebration-button">•̀.̫ •́✧</div>
                            <span className="celebration-button__waves-1"></span>
                            <span className="celebration-button__waves-2"></span>
                          </div>
                          <canvas id="celebration-canvas">

                          </canvas>
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
        </div>
      </section >
    );
  }
}



 // /*  rate slider */
    // const container = document.querySelector('.slider__box');
    // const btn = document.querySelector('.slider__btn');
    // const color = document.querySelector('.slider__color');
    // const tooltip = document.querySelector('.slider__tooltip');

    // const dragElement = (target, btn) => {
    //   target.addEventListener('mousedown', (e) => {
    //     onMouseMove(e);
    //     window.addEventListener('mousemove', onMouseMove);
    //     window.addEventListener('mouseup', onMouseUp);
    //   });

    //   const onMouseMove = (e) => {
    //     e.preventDefault();
    //     let targetRect = target.getBoundingClientRect();
    //     let x = e.pageX - targetRect.left + 10;
    //     if (x > targetRect.width) { x = targetRect.width };
    //     if (x < 0) { x = 0 };
    //     btn.x = x - 10;
    //     btn.style.left = btn.x + 'px';

    //     // get the position of the button inside the container (%)
    //     let percentPosition = (btn.x + 10) / targetRect.width * 100;

    //     // color width = position of button (%)
    //     color.style.width = percentPosition + "%";

    //     // move the tooltip when button moves, and show the tooltip
    //     tooltip.style.left = btn.x - 5 + 'px';
    //     tooltip.style.opacity = 1;

    //     // show the percentage in the tooltip
    //     tooltip.textContent = Math.round(percentPosition) + '%';
    //   };

    //   const onMouseUp = (e) => {
    //     window.removeEventListener('mousemove', onMouseMove);
    //     tooltip.style.opacity = 0;

    //     btn.addEventListener('mouseover', function () {
    //       tooltip.style.opacity = 1;
    //     });

    //     btn.addEventListener('mouseout', function () {
    //       tooltip.style.opacity = 0;
    //     });
    //   };
    // };

    // dragElement(container, btn);
