import React, { Component, createRef } from 'react';
// import TweenMax from "gsap";
import About from '../../Pages/About';
import Work from '../../Pages/Work';
// import Expertise from '../Expertise/Expertise';
import Experience from '../Experience/Experience';
import Accolades from '../Accolades/Accolades';
import FixedLinks from '../../Components/FixedLinks/FixedLinks.tsx';
import gsap from 'gsap';
import './Homepage.scss';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClass: 'nav-inactive',
      navigation: false,
      page: 'homepage',
      FixedLinksVisibility: true,
      boxPositionOne: ['-50px', '-50px'],
      boxPositionTwo: ['0px', '-50px'],
      boxPositionThree: ['50px', '-50px'],
      boxPositionFour: ['-50px', '0px'],
      boxPositionFive: ['0px', '0px'],
      boxPositionSix: ['50px', '0px'],
      boxPositionSeven: ['-50px', '50px'],
      boxPositionEight: ['0px', '50px'],
      boxPositionNine: ['50px', '50px'],
    };

    this.blockOne = createRef();
    this.blockTwo = createRef();
    this.blockThree = createRef();
    this.blockFour = createRef();
    this.blockFive = createRef();
    this.blockSix = createRef();
    this.blockSeven = createRef();
    this.blockEight = createRef();
    this.blockNine = createRef();
    this.blocksContainer = createRef();

    this.tl = gsap.timeline({
      paused: false,
      ease: "none",
      // repeat: -1,
    });
    this.tl2 = gsap.timeline({
      paused: true,
      ease: "power4.inOut",
    });
  }

  handleNearBottom = () => {
    let accolades = document.getElementById('accolades-component');
    const viewPort = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + window.innerHeight,
    }

    if (accolades.offsetTop < viewPort.bottom && accolades.offsetTop > viewPort.top - 100) {
      this.setState({ FixedLinksVisibility: false });
    } else {
      this.setState({ FixedLinksVisibility: true });
    }
  }


  // Start: Moving Moxes Animation

  // boxAnimation = () => {
  //   let { boxPositionOne } = this.state;
  //   let { boxPositionTwo } = this.state;
  //   let { boxPositionThree } = this.state;
  //   let { boxPositionFour } = this.state;
  //   let { boxPositionFive } = this.state;
  //   let { boxPositionSix } = this.state;
  //   let { boxPositionSeven } = this.state;
  //   let { boxPositionEight } = this.state;
  //   let { boxPositionNine } = this.state;

  //   let blockOne = this.blockOne.current;
  //   let blockTwo = this.blockTwo.current;
  //   let blockThree = this.blockThree.current;
  //   let blockFour = this.blockFour.current;
  //   let blockFive = this.blockFive.current;
  //   let blockSix = this.blockSix.current;
  //   let blockSeven = this.blockSeven.current;
  //   let blockEight = this.blockEight.current;
  //   let blockNine = this.blockNine.current;

  //   //Kernel of possible positions.
  //   let kernel =
  //     [
  //       [["-50px", "-50px"], ["0px", "-50px"], ["50px", "-50px"]],
  //       [["-50px", "0px"], ["0px", "0px"], ["50px", "0px"]],
  //       [["-50px", "50px"], ["0px", "50px"], ["50px", "50px"]]
  //     ];

  //   //Randomly select a position from the kernel.
  //   function newPosition(coordinates) {
  //     let indexChange = Math.round(Math.random());
  //     let otherIndex = 0;
  //     if (indexChange === 0) {
  //       otherIndex = coordinates[1];
  //       switch (otherIndex) {
  //         case "-50px":
  //           otherIndex = 0;
  //           break;
  //         case "0px":
  //           otherIndex = 1;
  //           break;
  //         case "50px":
  //           otherIndex = 2;
  //           break;
  //         default:
  //           break;
  //       }
  //     } else {
  //       otherIndex = coordinates[0];
  //       switch (otherIndex) {
  //         case "-50px":
  //           otherIndex = 0;
  //           break;
  //         case "0px":
  //           otherIndex = 1;
  //           break;
  //         case "50px":
  //           otherIndex = 2;
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //     let coordinateChange = Math.floor(Math.random() * 3)
  //     if (indexChange === 0) {
  //       console.log("changing from:", coordinates);
  //       coordinates = kernel[otherIndex][coordinateChange];
  //       console.log("coordinates to", coordinates)
  //     } else {
  //       console.log("changing from:", coordinates);
  //       coordinates = kernel[coordinateChange][otherIndex];
  //       console.log("coordinates to", coordinates)
  //     }
  //     return coordinates;
  //   }

  //   let newBoxPositionOne = newPosition(boxPositionOne);
  //   let newBoxPositionTwo = newPosition(boxPositionTwo);
  //   let newBoxPositionThree = newPosition(boxPositionThree);
  //   let newBoxPositionFour = newPosition(boxPositionFour);
  //   let newBoxPositionFive = newPosition(boxPositionFive);
  //   let newBoxPositionSix = newPosition(boxPositionSix);
  //   let newBoxPositionSeven = newPosition(boxPositionSeven);
  //   let newBoxPositionEight = newPosition(boxPositionEight);
  //   let newBoxPositionNine = newPosition(boxPositionNine);
  //   this.setState({ boxPositionOne: newBoxPositionOne })
  //   this.setState({ boxPositionTwo: newBoxPositionTwo })
  //   this.setState({ boxPositionThree: newBoxPositionThree })
  //   this.setState({ boxPositionFour: newBoxPositionFour })
  //   this.setState({ boxPositionFive: newBoxPositionFive })
  //   this.setState({ boxPositionSix: newBoxPositionSix })
  //   this.setState({ boxPositionSeven: newBoxPositionSeven })
  //   this.setState({ boxPositionEight: newBoxPositionEight })
  //   this.setState({ boxPositionNine: newBoxPositionNine })

  //   this.tl.to(blockOne,
  //     {
  //       // x: -50,
  //       // y: -50,
  //       transform: `translate(${newBoxPositionOne})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionOne = newPosition(this.state.boxPositionOne);
  //       //   this.setState({ boxPosition: newBoxPositionOne });
  //       //   this.tl.to(blockOne, { transform: `translate(${newBoxPositionOne})` });
  //       // }
  //     })
  //   this.tl.to(blockTwo,
  //     {
  //       // x: 0,
  //       // y: -50,
  //       transform: `translate(${newBoxPositionTwo})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionTwo = newPosition(this.state.boxPositionTwo);
  //       //   this.setState({ boxPosition: newBoxPositionTwo });
  //       //   this.tl.to(blockTwo, { transform: `translate(${newBoxPositionTwo})` });
  //       // }
  //     })
  //   this.tl.to(blockThree,
  //     {
  //       // x: 50,
  //       // y: -50,
  //       transform: `translate(${newBoxPositionThree})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionThree = newPosition(this.state.boxPositionThree);
  //       //   this.setState({ boxPosition: newBoxPositionThree });
  //       //   this.tl.to(blockThree, { transform: `translate(${newBoxPositionThree})` });
  //       // }
  //     })
  //   this.tl.to(blockFour,
  //     {
  //       // x: -50,
  //       // y: 0,
  //       transform: `translate(${newBoxPositionFour})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionFour = newPosition(this.state.boxPositionFour);
  //       //   this.setState({ boxPosition: newBoxPositionFour });
  //       //   this.tl.to(blockFour, { transform: `translate(${newBoxPositionFour})` });
  //       // }
  //     })
  //   this.tl.to(blockFive,
  //     {
  //       // x: 0,
  //       // y: 0,
  //       transform: `translate(${newBoxPositionFive})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionFive = newPosition(this.state.boxPositionFive);
  //       //   this.setState({ boxPosition: newBoxPositionFive });
  //       //   this.tl.to(blockFive, { transform: `translate(${newBoxPositionFive})` });
  //       // }
  //     })
  //   this.tl.to(blockSix,
  //     {
  //       // x: 50,
  //       // y: 0,
  //       transform: `translate(${newBoxPositionSix})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionSix = newPosition(this.state.boxPositionSix);
  //       //   this.setState({ boxPosition: newBoxPositionSix });
  //       //   this.tl.to(blockSix, { transform: `translate(${newBoxPositionSix})` });
  //       // }
  //     })
  //   this.tl.to(blockSeven,
  //     {
  //       // x: -50,
  //       // y: 50,
  //       transform: `translate(${newBoxPositionSeven})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionSeven = newPosition(this.state.boxPositionSeven);
  //       //   this.setState({ boxPosition: newBoxPositionSeven });
  //       //   this.tl.to(blockSeven, { transform: `translate(${newBoxPositionSeven})` });
  //       // }
  //     })
  //   this.tl.to(blockEight,
  //     {
  //       // x: 0,
  //       // y: 50,
  //       transform: `translate(${newBoxPositionEight})`,
  //       // onComplete: () => {
  //       //   const newBoxPositionEight = newPosition(this.state.boxPositionEight);
  //       //   this.setState({ boxPosition: newBoxPositionEight });
  //       //   this.tl.to(blockEight, { transform: `translate(${newBoxPositionEight})` });
  //       // }
  //     })
  //   this.tl.to(blockNine,
  //     {
  //       // x: 50,
  //       // y: 50,
  //       transform: `translate(${newBoxPositionNine})`,
  //       onComplete: () => {
  //         this.boxAnimation();
  //         // const newBoxPositionNine = newPosition(this.state.boxPositionNine);
  //         // this.setState({ boxPosition: newBoxPositionNine });
  //         // this.tl.to(blockNine, { transform: `translate(${newBoxPositionNine})` });
  //       }
  //     })
  // }
  // End: Moving Boxes Animation

  handleHover = () => {
    console.log('hovering');
    let blockOne = this.blockOne.current;
    let blockTwo = this.blockTwo.current;
    let blockThree = this.blockThree.current;
    let blockFour = this.blockFour.current;
    let blockFive = this.blockFive.current;
    let blockSix = this.blockSix.current;
    let blockSeven = this.blockSeven.current;
    let blockEight = this.blockEight.current;
    let blockNine = this.blockNine.current;
    let blocksContainer = this.blocksContainer.current;

    this.tl2.to(blocksContainer,
      blockOne,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockTwo,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockThree,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockFour,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockFive,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockSix,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockSeven,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockEight,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.to(
      blockNine,
      {
        transform: `translate(-200px, 0px)`
      })
    this.tl2.play();
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleNearBottom)
    // Box Animation
    // window.addEventListener('mouseenter', this.handleHover)
    // this.boxAnimation();
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleNearBottom);
    // Box Animation
    // window.removeEventListener('mouseenter', this.handleHover);
    // this.tl2.kill();
  }

  render() {
    let FixedLinksVisibility = this.state.FixedLinksVisibility;

    return (
      <div id="homepage-component">
        <FixedLinks fixedlinksvisibility={FixedLinksVisibility} />
        {/* <canvas id="mouse-trail">

        </canvas> */}
        <div className="landing-page-wrapper">
          <div className="landing-intro">
            <h1 data-aos="fade-in" data-aos-duration="3000">
              <span className="bolded">J</span>ulius <span className="bolded">D</span>orfman
              <br />
            </h1>
            <span data-aos="fade-in" className="landing-flavor">Web Developer / Software Engineer</span>
            <div className="indication-wrapper">
              <div></div>
              {/* <div href={'#about-component'} className={`vertical-orientation-right flavor-tags-slide-down-${this.props.toggleHide}`}>scroll</div> */}
            </div>
          </div>

          <div className="landing-intro-fragment">
            <div className="shadow-wrapper">
              <div className="shadow"></div>
            </div>

            <div className="button-container">
              <div className="button-wrapper" data-aos="fade-is" data-aos-duration="3000">
                <a href="https://www.linkedin.com/in/juliusgdorfman/"
                  target="_blank" rel="noopener noreferrer"
                  className="contact-me">
                  <p>
                    Contact Me
                  </p>
                  <span className="glow-wrapper">
                    <span className="glow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" className="homepage-text">
            HELLO
            <br />
            WORLD
          </div>
          {/* Box Animation */}
          {/* <div className="blocks-wrapper">
            <div ref={this.blocksContainer} className="blocks-container">
              <div
                ref={this.blockOne}
                className="block-1">
              </div>
              <div
                ref={this.blockTwo}
                className="block-2">
              </div>
              <div
                ref={this.blockThree}
                className="block-3">
              </div>
              <div
                ref={this.blockFour}
                className="block-4">
              </div>
              <div
                ref={this.blockFive}
                className="block-5">
              </div>
              <div
                ref={this.blockSix}
                className="block-6">
              </div>
              <div
                ref={this.blockSeven}
                className="block-7">
              </div>
              <div
                ref={this.blockEight}
                className="block-8">
              </div>
              <div
                ref={this.blockNine}
                className="block-9">
              </div>
            </div>
          </div> */}
        </div>
        <div className="background-spacer"></div>
        <div className="homepage-components-wrapper">
          {/* <Expertise /> */}
          <About />
          {/* <Skills /> */}
          <Work handleCurrentPage={this.props.handleCurrentPage} />
          {/* <Contact /> */}
          <Experience />
          <Accolades />
        </div>
      </div>
    );
  }
}