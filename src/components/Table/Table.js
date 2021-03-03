import React, { useState } from 'react';
import './Table.css'
import TableRow from "../TableRow/TableRow";
import Pagination from "../Pagination/Pagination";

function Table(props) {
  const { data, usersToRender, setUsersToRender, handleRowClick } = props
  const [isIncrease, setIsIncrease] = useState(false);

  const handleSortId = () => {
    let dataSort

    if (isIncrease) {
      dataSort = usersToRender.map(item => { return item }).reverse()
      setUsersToRender(dataSort)
      setIsIncrease(false)
      return;
    }

    dataSort =
      usersToRender.sort((a, b) => {
        if (a.id > b.id) { return 1 }
        if (a.id < b.id) { return -1 }
        return 0
      }).map(item => { return item })

    setUsersToRender(dataSort)
    setIsIncrease(true)

  }

  return (
    <>
      { data.length > 49 &&
      <Pagination
        data={data}
        setUsersToRender={setUsersToRender}
        pageSize={50}
        portionSize={5} />
      }
      <table className="table striped z-depth-4">
        <thead>
        <tr>
          <th onClick={handleSortId} className="center-align" >
            ID <i className="material-icons">{ isIncrease ? "arrow_drop_up" : "arrow_drop_down" }</i>
          </th>
          <th>First Name <i className="material-icons"></i></th>
          <th>Last Name <i className="material-icons"></i></th>
          <th>Email <i className="material-icons"></i></th>
          <th>Phone <i className="material-icons"></i></th>
        </tr>
        </thead>

        <tbody>
        {
          usersToRender.map((user, index) => (
              <TableRow handleRowClick={handleRowClick} key={index} user={user} />
            )
          )
        }
        </tbody>
      </table>
    </>
  );
}

export default Table;
