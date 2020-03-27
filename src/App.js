import React from "react";
import Nav from "../src/components/Nav";
import Table from "../src/components/Table";
import Search from "../src/components/Search";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
        <Table />
      </div>
    );
  }
}

export default App;
