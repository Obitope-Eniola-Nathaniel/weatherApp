import React from "react";
import "./SeasonDisplay.css";

class Clock extends React.Component {
  // This represent the whole of contructor call, bcus babels
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="time">
        <h1> The time is: {this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;