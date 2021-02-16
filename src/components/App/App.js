import React, { useState } from 'react';

import Table from "../Table/Table";
import api from '../utils/Api';
import Preloader from "../Preloader/Preloader";
import UserInfo from "../UserInfo/UserInfo";

function App() {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const handleGetMinData = () => {
    if (users) {
      setUsers([])
    }
    setIsPreloaderVisible(true)

    api.getMinData()
      .then(res => setUsers(res))
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => console.log(err))
  }

  const handleGetMaxData = () => {
    if (users) {
      setUsers([])
    }
    setIsPreloaderVisible(true)

    api.getMaxData()
      .then(res => setUsers(res))
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => console.log(err))
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
        <div className="container ">

        </div>
        <div className="row">
          <button
            onClick={handleGetMinData}
            className="col s3 waves-effect waves-light btn pink lighten-2">Get min data</button>
          <button
            onClick={handleGetMaxData}
            className="col s3 waves-effect waves-light btn purple lighten-2">Get max data</button>
        </div>
        { isUserInfoOpen && <UserInfo user={userInfo}/> }
        { isPreloaderVisible && <Preloader /> }
        { users.length > 0  && <Table handleRowClick={handleRowClick} data={users}/> }
      </div>
    </div>
  );
}

export default App;
