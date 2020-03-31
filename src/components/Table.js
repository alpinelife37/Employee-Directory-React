import React from "react";
import API from "../utils/API";
import TableRow from "./TableRow";
import Search from "./Search";
import "../styles/style.css";

class Table extends React.Component {
  state = {
    users: [],
    order: "descend",
    filteredList: []
  };

  handleOrder = () => {
    this.setState({
      order: this.state.order === "descend" ? "ascend" : "descend"
    });
    const sortedList = this.state.filteredList.sort(this.compare);
    this.setState({ filteredList: sortedList });
  };

  compare = (a, b) => {
    const aName = a.name.first;
    const bName = b.name.first;
    if (aName > bName) {
      if (this.state.order === "descend") {
        return -1;
      } else if (this.state.order === "ascend") {
        return 1;
      }
    }
    if (aName < bName) {
      if (this.state.order === "descend") {
        return 1;
      } else if (this.state.order === "ascend") {
        return -1;
      }
    }

    return 0;
  };

  handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredList });
    if (event.target.value === "") {
      this.setState({
        filteredList: this.state.users
      });
    }
  };

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({
        users: res.data.results,
        filteredList: res.data.results
      });
    });
  }

  render() {
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th onClick={this.handleOrder.bind(this)} scope="col">
                First
              </th>
              <th scope="col">Last</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredList.map((item, i) => (
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
      </div>
    );
  }
}

export default Table;
