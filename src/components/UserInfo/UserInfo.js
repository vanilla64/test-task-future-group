import React from 'react';
import './UserInfo.css'

function UserInfo(props) {
  const { address, description, firstName, lastName } = props.user;
  const { city, state, streetAddress, zip } = address;
  const { onClose } = props

  const handleCloseClick = () => {
    onClose(false)
  }

  return (
    <section className="user-info row z-depth-4">
      <div className="col s10">
        <h4>User info</h4>
        <p>Выбран пользователь: <b>{ `${firstName} ${lastName}` }</b></p>
        <div className="row">
          <p>Описание:</p>
          <textarea className="col s8" value={ description } readOnly />
        </div>
        <p>Адрес проживания: <b>{ streetAddress }</b></p>
        <p>Город: <b>{ city }</b></p>
        <p>Провинция/штат: <b>{ state }</b></p>
        <p>Индекс: <b>{ zip }</b></p>
      </div>
      <button
        onClick={handleCloseClick}
        className="user-info__close-btn col s2 waves-effect waves-light btn blue lighten-2">Close</button>
    </section>

  );
}

export default UserInfo;
