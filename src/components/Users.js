import React from "react";

function Users(props) {
  return props.users.map(user => (
    <tr key={user.login.uuid}>
      <td>
        <img src={user.picture.thumbnail} alt="user headshot" />
      </td>
      <td>{user.name.first + " " + user.name.last}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
    </tr>
  ));
}

export default Users;
