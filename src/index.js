import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Clock from "./DateTime";

// Class Component
class App extends React.Component {
  // This represent the whole of contructor call, bcus of babels
  state = { lat: null, errMessage: "" };

  // This will run atomatical once
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we call setstate to update the set object
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
        console.log(err)
      }
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please Acceprt Location Request" />;
  }

  render() {
    return (
      <div clasName="border red">
        <Clock />  
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));





// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // Fuctional Component
// // const App = () => {
// //      render() {
// //         window.navigator.geolocation.getCurrentPosition(
// //             position => console.log(position),
// //             err => console.log(err)
// //         );

// //         return <div>Latitude </div>
// //     }
// // }

// // Class Component
// class App extends React.Component {
//   //  It will actomatically called
//   //   constructor(props) {
//   //     super(props);

//   //     // this is the only time we do direct assignment to this.state
//   //     this.state = { lat: null, errMessage: "" };
//   //   }

//   // This represent the whole of contructor call, bcus babels
//   state = { lat: null, errMessage: "" };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // we call setstate to update the set object
//         this.setState({ lat: position.coords.latitude });

//         // we did not do the below
//         // this.state.lat = position.coords.latitude
//       },
//       (err) => {
//         this.setState({ errMessage: err.message });
//       }
//     );
//   }

//   render() {
//     //     return (
//     //         <div>
//     //             Latitude {this.state.lat}
//     //         <br />
//     //             Error {this.state.errMessage}
//     //         </div>
//     //     );
//     // }
//     if (this.state.errMessage && !this.state.lat) {
//       return <div>Error: {this.state.errMessage}</div>;
//     }

//     if (!this.state.errMessage && this.state.lat) {
//       return <div>Latitude: {this.state.lat}</div>;
//     }

//     return <div>Loading! </div>;
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));
