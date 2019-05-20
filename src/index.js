import React, { Component } from "react";
import ReactDOM from "react-dom";
import { foods } from "./food";
import { choice, remove } from "./helper";

class App extends Component {
  render() {
    const myChoice = choice(foods);
    return (
      <div>
        <p>I would like: {myChoice}, please.</p>
        <p>Here you go : {myChoice}.</p>
        <p>Can I have one more?</p>
        <p>Sorry, we only have these left: {remove(foods, myChoice)}</p>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
