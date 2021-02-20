import React from 'react';
import TableRow from "../TableRow/TableRow";
import Pagination from "../Pagination/Pagination";

function Table(props) {
  const { data, isIncrease, usersToRender } = props
  console.log(usersToRender)
  
  const handleSortId = () => {
    props.onSorting(data)
  }

  return (
    <>
      { usersToRender.length > 49 &&
      <Pagination
        data={data}
        setUsersToRender={props.setUsersToRender}
        pageSize={50}
        portionSize={5} />
      }
      <table className="striped z-depth-4">
        <thead>
        <tr>
          <th onClick={handleSortId} className="center-align" >
            ID <i className="material-icons">{ isIncrease ? "arrow_drop_up" : "arrow_drop_down" }</i>
          </th>
          <th>First Name <i className="material-icons">arrow_drop_down</i></th>
          <th>Last Name <i className="material-icons">arrow_drop_down</i></th>
          <th>Email <i className="material-icons">arrow_drop_down</i></th>
          <th>Phone <i className="material-icons">arrow_drop_down</i></th>
        </tr>
        </thead>

        <tbody>
        {
          usersToRender.map((user, index) => (
              <TableRow handleRowClick={props.handleRowClick} key={index} user={user} />
            )
          )
        }
        </tbody>
      </table>
    </>
  );
}

export default Table;
