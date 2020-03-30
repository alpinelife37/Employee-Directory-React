import React from "react";

const styles = {
  nav: {
    background: "grey",
    marginTop: 20,
    padding: 30,
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    color: "blue"
  }
};

class NavBar extends React.Component {
  render() {
    return (
      <h1 style={styles.nav} className="container">
        Employee Listing
      </h1>
    );
  }
}

export default NavBar;
