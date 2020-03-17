import React from "react";
import Main from "../src/components/Main";
import Nav from "../src/components/Nav";

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
