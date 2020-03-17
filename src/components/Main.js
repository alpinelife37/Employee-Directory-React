import React from "react";
import API from "../utils/API";
import Users from "./Users";
import Search from "./Search";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchedUser: [],
      sortDir: "asc",
      userSearch: event => {
        const filter = event.target.value;
        const searchedResults = this.state.users.filter(item => {
          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ searchedUser: searchedResults });
      }
    };
    this.sortBy = this.sortBy.bind(this);
  }
  componentDidMount() {
    API.getUsers().then(answer => {
      this.setState({
        users: answer.data.results,
        searchedUser: answer.data.results
      });
    });
  }
  sortBy(key, data) {
    console.log(key);
    this.setState({
      users: data.sort((a, b) => {
        if (key === "phone") {
          if (this.state.sortDir === "asc") {
            return a.phone.localeCompare(b.phone);
          } else {
            return b.phone.localeCompare(a.phone);
          }
        }
        if (key === "firstname") {
          if (this.state.sortDir === "asc") {
            return a.name.first.localeCompare(b.name.first);
          } else {
            return b.name.first.localeCompare(a.name.first);
          }
        }
        if (key === "dob") {
          if (this.state.sortDir === "asc") {
            return a.dob.date.localeCompare(b.dob.date);
          } else {
            return b.dob.date.localeCompare(a.dob.date);
          }
        }
      })
    });
    this.setState({ sortDir: this.state.sortDir === "asc" ? "desc" : "asc" });
  }

  render() {
    return (
      <div className="container">
        <Search userSearch={this.state.userSearch} />
        <div className="table-responsive">
          <table id="users" className="table">
            <thead>
              <tr>
                <th>image</th>
                <th
                  className="sort"
                  onClick={() =>
                    this.sortBy("firstname", this.state.searchedUser)
                  }
                >
                  Name
                </th>
                <th
                  className="sort"
                  onClick={() => this.sortBy("phone", this.state.searchedUser)}
                >
                  Phone
                </th>
                <th>Email</th>
                <th
                  className="sort"
                  onClick={() => this.sortBy("dob", this.state.searchedUser)}
                >
                  Date of Birth
                </th>
              </tr>
            </thead>
            <tbody>
              <Users users={this.state.searchedUser} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main;
