import React, { useState } from 'react';

import Table from "../Table/Table";
import api from '../utils/Api';
import Preloader from "../Preloader/Preloader";
import UserInfo from "../UserInfo/UserInfo";
import FormAddUser from "../FormAddUser/FormAddUser";
import FilterForm from "../FilterForm/FilterForm";

function App() {
  const [users, setUsers] = useState([]);
  const [usersToRender, setUsersToRender] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [isFormAddUserVisible, setIsFormAddUserVisible] = useState(false);
  const [isIncreaseData, setIsIncreaseData] = useState(false);

  const handleGetMinData = () => {
    setUsers([])
    setUsersToRender([])
    setIsUserInfoOpen(false)
    setIsPreloaderVisible(true)

    api.getMinData()
      .then(res => {
        setUsers(res)
        setUsersToRender(res.slice(0, 50))
      })
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => console.log(err))
  }

  const handleGetMaxData = () => {
    setUsers([])
    setUsersToRender([])
    setIsUserInfoOpen(false)
    setIsPreloaderVisible(true)

    api.getMaxData()
      .then(res => {
        setUsers(res)
        setUsersToRender(res.slice(0, 50))
      })
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => console.log(err))
  }

  const handleAddUser = async (formData) => {
    if (users.length === 0) {
      setUsersToRender(formData, ...usersToRender)
    }
    setUsers([formData, ...users])
  }

  const openFormAddUser = () => {
    if (isFormAddUserVisible) {
      setIsFormAddUserVisible(false)
    } else {
      setIsFormAddUserVisible(true)
    }
  }

  const handleRowClick = (user) => {
    if (!isUserInfoOpen) {
      setIsUserInfoOpen(true)
    }

    setUserInfo(user)
  }

  const dataSorting = () => {
    let dataSort

    if (isIncreaseData) {
      dataSort = users.map(item => { return item }).reverse()
      setUsers(dataSort)
      setIsIncreaseData(false)
      return;
    }

    dataSort =
      users.sort((a, b) => {
        if (a.id > b.id) { return 1 }
        if (a.id < b.id) { return -1 }
        return 0
      }).map(item => { return item })

    setUsers(dataSort)
    setIsIncreaseData(true)
  }

  const handleFilterSubmit = (objData) => {
    const { data, values } = objData;
    const { id } = values;

    const filteredData = data.filter(item => item.id.toString() === id)

    setUsers(filteredData)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Test task</h1>
        <div className="container ">

        </div>
        <div className="row">
          <button
            onClick={handleGetMinData}
            className="col s4 waves-effect waves-light btn pink lighten-2">Get min data</button>
          <button
            onClick={handleGetMaxData}
            className="col s4 waves-effect waves-light btn purple lighten-2">Get max data</button>
          <button
            onClick={openFormAddUser}
            className="col s4 waves-effect waves-light btn blue lighten-2">
            { isFormAddUserVisible ? 'Close form' : 'Add user' }
          </button>
        </div>
        <FormAddUser isVisible={isFormAddUserVisible} onSubmit={handleAddUser} />
        {/*{ users.length > 10  && <Pagination /> }*/}
        { isUserInfoOpen && <UserInfo user={userInfo}/> }
        { isPreloaderVisible && <Preloader /> }
        { users.length > 0  &&
          <>
            <FilterForm
              onSubmit={handleFilterSubmit}
              data={usersToRender.length > 0 ? usersToRender : users} />
            <Table
              setUsersToRender={setUsersToRender}
              isIncrease={isIncreaseData}
              onSorting={dataSorting}
              handleRowClick={handleRowClick}
              // data={usersToRender.length > 0 ? usersToRender : users}/>
              usersToRender={usersToRender}
              data={users}/>
          </>
        }
      </div>
    </div>
  );
}

export default App;
