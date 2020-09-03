import React from "react";
import Header from "./header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 15,
      b: 25,
    };
  }

  render() {
    console.log(
      "Value of a is ",
      this.state.a,
      "Value of B is ",
      this.state.b,
      "Difference is",
      this.state.a - this.state.b
    );
    return (
      <h1>
        <button
          onClick={(e) => {
            this.setState({
              a: this.state.a + 50,
            });
          }}
        >
          Change Value
        </button>
      </h1>
    );
  }
}

// function App(props) {
//   super(props);
//   this.state = {
//     a: 450,
//   };

//   console.log("This is coming from App.js file", this.state.a);
//   return (
//     <div className="App">
//       <Header a={this.state.a} />
//     </div>
//   );
// }

export default App;
