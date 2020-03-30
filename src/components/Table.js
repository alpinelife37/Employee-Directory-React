import React from "react";
import API from "../utils/API";
import TableRow from "./TableRow";
import "../styles/style.css";

class Table extends React.Component {
  state = {
    users: [],
    tableOrder: "initial",
    searchUser: ""
  };

  // state = {
  //   users: [{}],
  //   order: "descend",
  //   filteredUsers: [{}]
  // };

  handleOrder = () => {};

  handleSearch = () => {};

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({
        users: res.data.results
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            {/* make a button to sort by first name */}
            <th scope="col">
              <button onClick="">First</button>
            </th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((item, i) => (
            <TableRow
              thumbnail={item.picture.medium}
              first={item.name.first}
              key={i}
              last={item.name.last}
              phone={item.phone}
              email={item.email}
              age={item.registered.age}
              state={item.location.state}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
