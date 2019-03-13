import React from "react";
import "../App.css";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true
    };

    this.url = "https://patrickdearteaga.com/audio/Boss%20Fight.ogg?_=10";
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

  render() {
    return (
      <div>
        {this.state.play === false ?
          <button positive className="Play" onClick={this.play}>
            &nbsp;Play <br />🎵
        </button>
          :
          <button positive className="Pause" onClick={this.pause}>
            Pause<br />⏸️
      </button>
        }
      </div>
    );
  }
}
export default Music;

// "https://ericskiff.com/music/Resistor%20Anthems/01%20A%20Night%20Of%20Dizzy%20Spells.mp3"
