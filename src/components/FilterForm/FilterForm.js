import React, { useState } from 'react';

function FilterForm(props) {
  const { data, onSubmit } = props;
  const [values, setValues] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => { return {...prev, [name]: value} })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    onSubmit({ data, values })
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className="row">
      <h4>Filter</h4>
      <div className="input-field col s2">
        <input placeholder="Id" name="id" id="id" type="number" className="validate" />
        <label className="active" htmlFor="id">Id</label>
      </div>
      <div className="input-field col s2">
        <input placeholder="First name" name="firstName" id="first-name" type="text" className="validate" />
        <label className="active" htmlFor="first-name">First Name</label>
      </div>
      <div className="input-field col s2">
        <input placeholder="Last name" name="lastName" id="last-name" type="text" className="validate" />
        <label className="active" htmlFor="last-name">Last Name</label>
      </div>
      <div className="input-field col s2">
        <input placeholder="email" name="email" id="email" type="email" className="validate" />
        <label className="active" htmlFor="email">Email</label>
      </div>
      <div className="input-field col s2">
        <input placeholder="phone" name="phone" id="phone" type="tel" className="validate" />
        <label className="active" htmlFor="phone">Phone</label>
      </div>
      <button className="col s2 waves-effect waves-light btn green lighten-2 direction-bottom">Find</button>
    </form>
  );
}

export default FilterForm;
