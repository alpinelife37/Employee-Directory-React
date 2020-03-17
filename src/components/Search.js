import React from "react";

function Search({ users }) {
  return (
    <div className="container">
      <form>
        <div>
          <label>Search by Name:</label>
          <input
            type="text"
            onChange={e => Search(e)}
            className="form-control"
            placeholder="Name"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
