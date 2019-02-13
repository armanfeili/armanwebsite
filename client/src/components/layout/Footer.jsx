import React, { Component } from "react";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

class Skills extends Component {
  render() {
    return (
      <footer className="" id="footer">
        <div className="row js--wp-3 footerIconBar">
          <div className=" box social-icon">
            <a
              href="https://www.instagram.com/arman_feili/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon-big footerIcon" />
            </a>
          </div>
          <div className=" box social-icon">
            <a
              href="https://www.linkedin.com/in/arman-feili-89b622132/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-big footerIcon" />
            </a>
          </div>
          <div className=" box social-icon">
            <a
              href="https://github.com/arman756"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-big footerIcon" />
            </a>
          </div>
        </div>
        <div className="row js--wp-3">
          <p className="long-copy pWhite">Contact me on social media</p>
        </div>
      </footer>
    );
  }
}

export default Skills;
