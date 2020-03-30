import React from "react";

const styles = {
  navBar: {
    background: "black",
    marginTop: 20,
    padding: 30,
    textAlign: "center",
    fontSize: 60,
    borderRadius: "15px 50px",
    fontWeight: "bold",
    color: "yellow",
    fontFamily: "Apple Chancery, cursive"
  }
};

class NavBar extends React.Component {
  render() {
    return (
      <h1 style={styles.navBar} className="container">
        Employee Listing
      </h1>
    );
  }
}

export default NavBar;
