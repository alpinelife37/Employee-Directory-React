import React from "react";

//class Search extends React.Component {
function Search({ handleSearchChange }) {
  return (
    <div className="container">
      <form className="col col-sm form-inline">
        <div className="form-group mb-5 mt-5">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e => handleSearchChange(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
