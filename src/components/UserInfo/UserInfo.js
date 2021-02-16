import React from 'react';

function UserInfo(props) {
  const { address, description, firstName, lastName } = props.user;
  const { city, state, streetAddress, zip } = address;

  return (
    <div className="user-info z-depth-4">
      <h4>User info</h4>
      <p>Выбран пользователь: <b>{ `${firstName} ${lastName}` }</b></p>
      <div className="row">
        <p>Описание:</p>
        <textarea className="col s8" value={ description } />
      </div>
      <p>Адрес проживания: <b>{ streetAddress }</b></p>
      <p>Город: <b>{ city }</b></p>
      <p>Провинция/штат: <b>{ state }</b></p>
      <p>Индекс: <b>{ zip }</b></p>
    </div>
  );
}

export default UserInfo;
