import React, { Component } from "react";

import DevConnector from "../../style/resources/img/DevConnector.png";
import Recipe from "../../style/resources/img/Recipe.png";
import ComingSoon from "../../style/resources/img/ComingSoon.png";

class WorkExamples extends Component {
  render() {
    return (
      <section className="blue-gradient-leftToRight section-features">
        <div className="row js--wp-3">
          <h2 className="h2-blue-background">Work Examples</h2>
          <p className="long-copy">
            Here are some of my deployed projects. hope ,I get more to do, to
            share with you :)
          </p>
        </div>
        <div className="row js--wp-3 workContainer">
          <div className="col span-1-of-4 box workPartContainer">
            <a
              href={`https://shielded-harbor-46217.herokuapp.com/`}
              target="_blank"
            >
              <img
                src={DevConnector}
                alt="DevConnector"
                className="workImageContainer"
              />
              <h3 className="workImageTitle">DevConnector</h3>
            </a>
            <p>
              DevConnector is a website for connecting developers. Any developer
              can sign up and do more :)
            </p>
          </div>
          <div className="col span-1-of-4 box workPartContainer">
            <a
              href={`https://shielded-harbor-46217.herokuapp.com/`}
              target="_blank"
            >
              <img src={Recipe} alt="Recipe" className="workImageContainer" />
              <h3 className="workImageTitle">Food Recipe</h3>
            </a>
            <p>
              Food Recipe is a website for searching any food existing in the
              world. it fetch all data from 'www.food2fork.com'.
            </p>
          </div>
          <div className="col span-1-of-4 box workPartContainer">
            <img
              src={ComingSoon}
              alt="ComingSoon"
              className="workImageContainer"
            />
            <h3 className="workImageTitle">Coming Soon</h3>
            <p>...</p>
          </div>
          <div className="col span-1-of-4 box workPartContainer">
            <img
              src={ComingSoon}
              alt="ComingSoon"
              className="workImageContainer"
            />
            <h3 className="workImageTitle">Coming Soon</h3>
            <p>...</p>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkExamples;

// activeClassName
// The className a < Link > receives when its route is active.No active class by default.

{
  /* <Link to={`/users/${user.id}`} activeClassName="active">
  {user.name}
</Link>; */
}
