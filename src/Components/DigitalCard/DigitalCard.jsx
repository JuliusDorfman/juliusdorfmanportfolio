import React from 'react';
import './DigitalCard.css';

export default function DigitalCard() {

  // let digitalCardContainer = document.getElementsByClassName('digital-card-container')[0]
  let digitalCard = document.getElementsByClassName('digital-card')[0]
  let digitalCardBack = document.getElementsByClassName('digital-card-back')[0]
  let lineWrapperBack = document.getElementsByClassName('line-wrappers-back')[0]
  let bluelineWrapperBack = document.getElementsByClassName("orange-line-flavor-back")[0]
  let orangelineWrapperBack = document.getElementsByClassName("blue-line-flavor-back")[0]
  let cardBackInfo = document.getElementsByClassName("digital-card-back-info")[0]
  let cardShine = document.getElementsByClassName("card-shine")[0]

  const handleCardFlip = () => {
    // console.log("clicked");
    if (digitalCard.style.transform === "scaleX(-1)") {
      digitalCard.style.transform = "scaleX(1)";
      digitalCardBack.style.transform = "scaleX(-1)";
      digitalCardBack.style.background = "rgba(5, 5, 10, 0)";
      lineWrapperBack.style.transform = "scaleX(0)";
      bluelineWrapperBack.style.transform = "scaleX(0)";
      orangelineWrapperBack.style.transform = "scaleX(0)";
      cardBackInfo.style.opacity = "0";
      cardShine.style.opacity = "1";
    } else {
      digitalCard.style.transform = "scaleX(-1)";
      digitalCardBack.style.transform = "scaleX(1)";
      digitalCardBack.style.background = "rgba(5, 5, 10, 1)";
      lineWrapperBack.style.transform = "scaleX(-1)";
      bluelineWrapperBack.style.transform = "scaleX(-1)";
      orangelineWrapperBack.style.transform = "scaleX(-1)";
      cardBackInfo.style.opacity = "1";
      cardShine.style.opacity = "0";
    }
  }

  return (
    <div id="digital-card-component" onClick={handleCardFlip}>

      <div className="digital-card-component">
        <div className="digital-card-container">

          <div className="digital-card">
            <div className="card-content">
              <div className="card-initials-wrapper">
                {/* <div className="card-initials-background" /> */}
                <p className="card-initials">
                  J
                </p>
                <p className="card-initials">
                  D
                </p>
              </div>
              <div className="card-name">
                <p>
                  <span className="bolded mini-space">J</span>ulius
                  <br />
                  <span className="bolded">D</span>orfman
                </p>
                <p className="tagline">
                  Web Developer / Engineer
                </p>
              </div>
            </div>
            <div className="line-wrappers">
              <div className="blue-line-flavor"></div>
              <div className="orange-line-flavor"></div>
            </div>
            <div className="card-shine"></div>
          </div>

          <div className="digital-card-back">

            <div className="line-wrappers-back">
              <div className="blue-line-flavor-back"></div>
              <div className="orange-line-flavor-back"></div>
            </div>
            <ul className="digital-card-back-info">
              {/* <li>&nbsp;&nbsp;&nbsp;juliusdorfman@gmail.com</li> */}
              <li>juliusdorfman@gmail.com</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}
