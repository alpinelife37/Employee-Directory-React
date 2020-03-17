import React from "react";
import Main from "../src/components/Main";
import Nav from "../src/components/Nav";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
