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
    </tr>
  );
}

export default TableRow;
