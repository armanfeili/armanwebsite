import React, { Component } from "react";

class SkillBar extends Component {
  constructor() {
    super();
    this.state = {
      skillPart: "front-end",
      skills: {
        frontend: {
          HTMLCSS: 70,
          JavaScript: 70,
          React: 60
        },
        backend: {
          NodeJS: 40,
          MongoDB: 60,
          SQL: 10
        },
        other: {
          Premiere: 60,
          Photoshop: 10
        }
      }
    };
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.activeButton = this.activeButton.bind(this);
  }

  progressBar() {
    // var elem = [];
    var elem = document.querySelectorAll(".myBar");
    const el = Array.prototype.slice.call(elem);
    // console.log(el);
    var width = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    // var val = [80, 70, 10, 20, 30, 40, 100, 22];
    // console.log(this.state.skills);

    const skillValFrontEnd = Object.keys(this.state.skills.frontend).map(e => {
      return this.state.skills.frontend[e];
    });
    const skillValBackEnd = Object.keys(this.state.skills.backend).map(e => {
      return this.state.skills.backend[e];
    });
    const skillValOthers = Object.keys(this.state.skills.other).map(e => {
      return this.state.skills.other[e];
    });
    // console.log(skillValFrontEnd);
    // console.log(skillValBackEnd);
    // console.log(skillValOthers);

    // console.log("here");
    // console.log(width[i])
    let id;
    if (this.state.skillPart === "front-end") {
      // console.log(this.state.skillPart);
      id = setInterval(frame(skillValFrontEnd, id), 2000); // 10 milisecond
    } else if (this.state.skillPart === "back-end") {
      // console.log(this.state.skillPart);
      id = setInterval(frame(skillValBackEnd, id), 2000); // 10 milisecond
    } else if (this.state.skillPart === "other") {
      // console.log(this.state.skillPart);
      id = setInterval(frame(skillValOthers, id), 2000); // 10 milisecond
    }

    function frame(val, id) {
      for (var i = 0; i < el.length; i++) {
        if (width[i] >= val[i]) {
          clearInterval(id);
        } else {
          while (width[i] !== val[i]) {
            width[i]++;
          }
          el[i].style.width = width[i] + "%";
          el[i].innerHTML = width[i] * 1 + "%";
        }
      }
    }
    // function frame() {
    //   for (var i = 0; i < el.length; i++) {
    //     if (width[i] >= val[i]) {
    //       clearInterval(id);
    //       console.log("cancel");
    //     } else {
    //       console.log("there");
    //       // console.log(width[i])
    //       while (width[i] !== val[i]) {
    //         // console.log(width[0])
    //         width[i]++;
    //       }
    //       el[i].style.width = width[i] + "%";
    //       el[i].innerHTML = width[i] * 1 + "%";
    //       console.log("therelll");
    //     }
    //   }
    // }
  }

  activeButton() {
    var tabs = document.querySelector(".tabLinks");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function() {
        var current = document.querySelector(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  onClick1(e) {
    e.preventDefault();
    this.setState({ skillPart: "front-end" });
    this.progressBar();
    // this.activeButton();
    // console.log(e.target);
    // console.log(document.querySelector(".tabLinks"));
    // document.querySelector('.tablinks').
    let links = document.querySelectorAll(".tabLinks");
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
      }
    }

    e.target.classList.add("active");
  }
  onClick2(e) {
    e.preventDefault();
    this.setState({ skillPart: "back-end" });
    this.progressBar();
    // this.activeButton();
    // console.log(document.querySelector(".tabLinks"));
    // console.log(e.target);
    let links = document.querySelectorAll(".tabLinks");
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
      }
    }

    e.target.classList.add("active");
  }
  onClick3(e) {
    e.preventDefault();
    this.setState({ skillPart: "other" });
    this.progressBar();
    // console.log(e.target);
    // this.activeButton();
    // console.log(document.querySelector(".tabLinks"));
    let links = document.querySelectorAll(".tabLinks");
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
      }
    }

    e.target.classList.add("active");
  }

  componentDidMount() {
    this.progressBar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.skillPart !== this.state.skillPart) {
      //   this.setState({ errors: this.props.errors });
      this.progressBar();
    } // always make sure that errors in component state is similar to errors in application state
  } // this always retrun component,till the 'then()' part of the action happens

  render() {
    let skillBarContent;
    if (this.state.skillPart === "front-end") {
      skillBarContent = (
        <div id="front-end" className="tabContent ">
          <div className="cont">
            <h3 className="skill-h3">HTML & CSS</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.HTMLCSS}%</div>
            </div>
          </div>
          <div className="cont">
            <h3 className="skill-h3">JavaScript</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.JavaScript}%</div>
            </div>
          </div>
          <div className="cont">
            <h3 className="skill-h3">React</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.React}%</div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.skillPart === "back-end") {
      skillBarContent = (
        <div id="back-end" className="tabContent">
          <div className="cont">
            <h3 className="skill-h3">Node JS</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.NodeJS}%</div>
            </div>
          </div>
          <div className="cont">
            <h3 className="skill-h3">MongoDB</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.MongoDB}%</div>
            </div>
          </div>
          <div className="cont">
            <h3 className="skill-h3">SQL</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.SQL}%</div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.skillPart === "other") {
      skillBarContent = (
        <div id="other" className="tabContent">
          <div className="cont">
            <h3 className="skill-h3">Adobe premiere</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.Premiere}%</div>
            </div>
          </div>
          <div className="cont">
            <h3 className="skill-h3">Adobe photoShop</h3>
            <div className="myProgress">
              <div className="myBar">{this.state.skills.Photoshop}%</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <section className="tabSection">
        <h2>Skills</h2>
        <div className="tab row">
          <div className="buttons">
            <button
              className="tabLinks active"
              id="defaultOpen"
              //   onclick="openTab(event,'front-end'),progressBar()"
              onClick={this.onClick1}
              //   onClick={(this.setState().skillPart = "front-end")}
            >
              Front-End
            </button>
            <button
              className="tabLinks"
              // onclick="openTab(event,'back-end')"
              //   onClick={this.setState({ skillPart: "back-end" })}
              onClick={this.onClick2}
            >
              Back-end
            </button>
            <button
              className="tabLinks"
              //  onclick="openTab(event,'other')"
              //   onClick={this.setState({ skillPart: "other" })}
              onClick={this.onClick3}
            >
              other
            </button>
          </div>
        </div>
        <div className="content row">{skillBarContent}</div>
      </section>
    );
  }
}

export default SkillBar;
