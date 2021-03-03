import React, { useState } from 'react';

import Table from "../Table/Table";
import api from '../../utils/Api';
import Preloader from "../Preloader/Preloader";
import UserInfo from "../UserInfo/UserInfo";
import FormAddUser from "../FormAddUser/FormAddUser";
import FilterForm from "../FilterForm/FilterForm";
import M from 'materialize-css'

function App() {
  const [users, setUsers] = useState([]);
  const [usersToRender, setUsersToRender] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [isFormAddUserVisible, setIsFormAddUserVisible] = useState(false);

  const resetBeforeFetch = () => {
    setUsers([])
    setUsersToRender([])
    setIsUserInfoOpen(false)
    setIsPreloaderVisible(true)
  }

  const handleGetMinData = () => {
    resetBeforeFetch()

    api.getMinData()
      .then(res => {
        setUsers(res)
        setUsersToRender(res.slice(0, 50))
      })
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => M.toast({html: err.message}))
  }

  const handleGetMaxData = () => {
    resetBeforeFetch()

    api.getMaxData()
      .then(res => {
        setUsers(res)
        setUsersToRender(res.slice(0, 50))
      })
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => M.toast({html: err.message}))
  }

  const handleAddUser = (formData) => {
    setUsers([formData, ...users])
    setUsersToRender([formData, ...users])
    M.toast({ html: 'User added!' })
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

  return (
    <div className="App">
      <div className="container">
        <h1>Test task</h1>
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
        { isPreloaderVisible && <Preloader /> }
        { users.length > 0  &&
          <>
            <FilterForm
              setDataForRender={setUsersToRender}
              data={users} />
            <Table
              setUsersToRender={setUsersToRender}
              handleRowClick={handleRowClick}
              usersToRender={usersToRender}
              data={users}/>
            { isUserInfoOpen && <UserInfo onClose={setIsUserInfoOpen} user={userInfo}/> }
          </>
        }
      </div>
    </div>
  );
}

export default App;
