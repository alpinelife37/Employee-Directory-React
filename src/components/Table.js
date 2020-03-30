import React from "react";
import API from "../utils/API";
import TableRow from "./TableRow";
import "../styles/style.css";
console.log(API.getUsers());

const employees = [
  {
    firstName: "James",
    lastName: "Nelson",
    phone: "123-4567"
  },
  {
    firstName: "Sally",
    lastName: "May",
    phone: "123-4367"
  }
];

class Table extends React.Component {
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
          </tr>
        </thead>
        <tbody>
          {employees.map(item => (
            <TableRow
              first={item.firstName}
              key={item.phone}
              last={item.lastName}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
