import React, { useState } from 'react';

function FormAddUser(props) {
  const [values, setValues] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  let isValid =
    values.id === '' || values.firstName === '' ||
    values.lastName === '' || values.email === '' || values.phone === ''

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setValues((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.onSubmit(values)
    setValues({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    })
  }

  return (
    props.isVisible &&
    <section>
      <form onChange={handleChange} onSubmit={handleSubmit} className="row">
        <h4>Add user</h4>
        <div className="input-field col s2">
          <input
            onChange={handleChange}
            value={values.id ? values.id : ''}
            name="id" id="id" type="number" className="validate" required />
          <label htmlFor="id">Id</label>
        </div>
        <div className="input-field col s2">
          <input
            onChange={handleChange}
            value={values.firstName ? values.firstName : ''}
            name="firstName" id="first-name" type="text" className="validate" required />
          <label htmlFor="first-name">First Name</label>
        </div>
        <div className="input-field col s2">
          <input
            onChange={handleChange}
            value={values.lastName ? values.lastName : ''}
            name="lastName" id="last-name" type="text" className="validate" required />
          <label htmlFor="last-name">Last Name</label>
        </div>
        <div className="input-field col s3">
          <input
            onChange={handleChange}
            value={values.email ? values.email : ''}
            name="email" id="email" type="email" className="validate" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s3">
          <input
            onChange={handleChange}
            value={values.phone ? values.phone : ''}
            name="phone" id="phone" type="tel" className="validate" required />
          <label htmlFor="phone">Phone</label>
        </div>
        <button
          type="submit"
          disabled={isValid}
          className="col s4 waves-effect waves-light btn green lighten-2">Add</button>
        <button
          type="reset"
          className="col s4 waves-effect waves-light btn black-text transparent">Reset</button>
      </form>

    </section>
  );
}

export default FormAddUser;
