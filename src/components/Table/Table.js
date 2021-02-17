import React from 'react';
import TableRow from "../TableRow/TableRow";

function Table(props) {
  const { data } = props
  console.log(data)

  return (
    <table className="striped z-depth-4">
      <thead>
      <tr>
        <th className="center-align" >ID</th>
        <th>First Name <i className="material-icons">arrow_drop_down</i></th>
        <th>Last Name <i className="material-icons">arrow_drop_down</i></th>
        <th>Email <i className="material-icons">arrow_drop_down</i></th>
        <th>Phone <i className="material-icons">arrow_drop_down</i></th>
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