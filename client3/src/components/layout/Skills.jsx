import React, { Component } from "react";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

class Skills extends Component {
  render() {
    return (
      <section
        id="skills"
        className="blue-gradient-leftToRight section-features"
      >
        <div className="row js--wp-3">
          <h2 className="h2-blue-background">Skills</h2>
          <p className="long-copy">
            Here are some skills I have, and in the future I'll learn more
            languages than I know now. So just take a look and wait for it... =)
          </p>
        </div>
        <div className="row js--wp-3">
          <div className="col span-1-of-4 box">
            <FaReact className="icon-big" />
            <h3>React</h3>
            <p>I use React components for coding front-end.</p>
          </div>
          <div className="col span-1-of-4 box">
            <FaNode className="icon-big" />
            <h3>NodeJS</h3>
            <p>I also use NodeJs for coding back-end.</p>
          </div>
          <div className="col span-1-of-4 box">
            <FaDatabase className="icon-big" />
            <h3>Database</h3>
            <p>
              right now, I'm using mongoDB as database, but in near future, I'll
              learn how to store with SQL
            </p>
          </div>
          <div className="col span-1-of-4 box">
            <FaApple className="icon-big" />
            <h3>Mac-OS</h3>
            <p>I have a macbook-pro ,so I code on mac-OS base</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
