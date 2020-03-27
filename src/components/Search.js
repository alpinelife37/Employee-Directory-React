import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default Search;
