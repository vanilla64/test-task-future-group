import React from 'react';

function TableRow(props) {
  const user = props.user;
  const { id, firstName, lastName, email, phone } = user;

  const handleClick = () => {
    props.handleRowClick(user)
  }

  return (
    <tr className="table-row" onClick={handleClick}>
      <td className="center-align" >{ id }</td>
      <td>{ firstName }</td>
      <td>{ lastName }</td>
      <td>{ email }</td>
      <td>{ phone }</td>
    </tr>
  );
}

export default TableRow;