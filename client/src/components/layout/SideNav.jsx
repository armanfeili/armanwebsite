import React, { Component } from "react";

import { connect } from "react-redux";
import song from "../../style/vendors/songs/EvilWithin.mp3";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
// import ReactAudioPlayer from "react-audio-player";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      play: "off"
    };
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
  }

  onPlay(e) {
    let music = document.getElementById("audio");
    music.play();
    this.setState({ play: "on" });
  }
  onPause(e) {
    let music = document.getElementById("audio");
    music.pause();
    this.setState({ play: "off" });
  }

  // if (document.querySelector(".tabLinks").classList.contains("active")) {
  //   document.querySelector(".tabLinks").classList.remove("active");
  //   console.log("done");
  // }

  render() {
    let audioLogo;

    if (this.state.play === "on") {
      audioLogo = <FaPause name="play" onClick={this.onPause} />;
    } else {
      audioLogo = <FaPlay name="play" onClick={this.onPlay} />;
    }
    // if (document.getElementById("play").classList.contains("playing")) {
    //   audioLogo = <FaPause name="play" onClick={this.onPause} />;
    //   document.getElementById("play").classList.remove("playing");
    // } else {
    //   audioLogo = <FaPlay name="play" onClick={this.onPlay} />;
    //   document.getElementById("play").classList.add("playing");
    // }
    return (
      <div className="iconBar">
        {/* <audio id="audio" src={song} /> */}
        {/* <ReactAudioPlayer src={song} autoPlay controls /> */}
        <audio id="audio" autoPlay>
          <source id="song-1" src={song} type="audio/ogg" />
          <source id="song-1" src={song} type="audio/mp3" />

          {/* <!-- <embed src="vendors/songs/EvilWithin.mp3" width="180" height="90" hidden="true" /> --> */}
        </audio>
        <div>
          <ul>
            <li>
              <a href="javascript:void(0)" className="active">
                <i id="play" className="playIcon">
                  {audioLogo}
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(Navbar);
