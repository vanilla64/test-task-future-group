import React from 'react';
import TableRow from "../TableRow/TableRow";

function Table(props) {
  const { data } = props

  return (
    <table className="striped z-depth-4">
      <thead>
      <tr>
        <th className="center-align" >ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      </thead>

      <tbody>
      {
        data.map((user, index) => (
          <TableRow handleRowClick={props.handleRowClick} key={index} user={user} />
          )
        )
      }
      </tbody>
    </table>
  );
}

export default Table;