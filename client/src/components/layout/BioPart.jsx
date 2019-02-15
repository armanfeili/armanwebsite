import React, { Component } from "react";
import farmVideo from "../../style/resources/img/farm3.mp4";

// for creating autoplay muted loop video in background, we should use normal <video> tag
// containing <source /> tags with closing tag. also we should use autoPlay instead of autoplay

class BioButton extends Component {
  render() {
    return (
      <section id="about" className=" bioPart">
        
        <video loop muted autoPlay id="background-video" className="fullscreen-bg__video">
          <source src={farmVideo} type="video/webm" />
          <source src={farmVideo} type="video/mp4" />
          <source src={farmVideo} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="js--wp-2 bio-text">
          <h2 className="about-h2">Biography:</h2>

          <div className="bio-pragraph">
            <p>I'm going to be a full-stack web developer,...</p>
            <p>
              I'm intrested in movies,people,and almost every beautiful things
            </p>
          </div>
          <div className="getInfo">
            <a href="#skills" className="myBtn btn  btn-full ">
              get more info
            </a>
          </div>
          {/* <!-- The Modal --> */}
          <div id="myModal" className="modal">
            {/* <!-- Modal content --> */}
            <div className="modal-content">
              <div className="modal-header">
                <span className="close">&times;</span>
                <h2>Modal Header</h2>
              </div>
              <div className="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
              </div>
              <div className="modal-footer">
                <h3>Modal Footer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BioButton;
