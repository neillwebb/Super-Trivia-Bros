import React, { Component } from "react";
import "../App.css";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true
    };

    this.url =
      "https://ericskiff.com/music/Resistor%20Anthems/01%20A%20Night%20Of%20Dizzy%20Spells.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
    this.setState({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  };

  pause = () => {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  };

  //   componentDidMount() {
  //     console.log("test");
  //     this.setState({
  //       play: true
  //     });
  //   }

  render() {
    return (
      <div>
        <button positive className="Play" onClick={this.play}>
          Play
        </button>
        <button className="Pause" onClick={this.pause}>
          Pause
        </button>
      </div>
    );
  }
}
export default Music;
