import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>
        <img alt={props.first} src={props.thumbnail} />
      </td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
      <td>{props.state}</td>
    </tr>
  );
}

export default TableRow;
