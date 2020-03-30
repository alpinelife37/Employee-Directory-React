import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="col col-sm form-inline">
          <div className="form-group mb-5 mt-5">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
