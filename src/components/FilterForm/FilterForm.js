import React, { useState } from 'react';
import M from 'materialize-css';

function FilterForm(props) {
  const { data, setDataForRender } = props;
  const [values, setValues] = useState({});

  const styles = {
    submitButton: data.length < 50
      ? 'col s1 waves-effect waves-light btn green lighten-2'
      : 'col s2 waves-effect waves-light btn green lighten-2',

    resetButton: 'col s2 waves-effect waves-light btn black-text transparent',

    inputId: data.length < 50
      ? 'input-field col s1'
      : 'input-field col s2'
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => { return {...prev, [name]: value} })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const keys = Object.keys(values)
    let filteredData = []

    keys.forEach(key => {
      let arr = data.filter(item => item[key].toString() === values[key])
      arr.forEach(i => filteredData.push(i))
    })

    if (filteredData.length === 0) {
      return M.toast({ html: 'User not found' })
    }

    const reduceData = filteredData.reduce((result, item) => {
      return result.includes(item) ? result : [...result, item]
    }, [])

    setDataForRender(reduceData)
    // setValues({})
  }

  const handleReset = () => {
    // onReset()
    setDataForRender(data.slice(0, 50))
    setValues({})
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} onReset={handleReset} className="row">
      <h4>Filter</h4>
      <div className={styles.inputId}>
        <input
          onChange={handleChange}
          value={values.id ? values.id : ''}
          name="id" id="filterId" type="number" className="validate" />
        <label htmlFor="filterId">Id</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.firstName ? values.firstName : ''}
          name="firstName" id="filterFirst-name" type="text" className="validate" />
        <label htmlFor="filterFirst-name">First Name</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.lastName ? values.lastName : ''}
          name="lastName" id="filterLast-name" type="text" className="validate" />
        <label htmlFor="filterLast-name">Last Name</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.email ? values.email : ''}
          name="email" id="filterEmail" type="email" className="validate" />
        <label htmlFor="filterEmail">Email</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.phone ? values.phone : ''}
          name="phone" id="filterPhone" type="tel" className="validate" />
        <label htmlFor="filterPhone">Phone</label>
      </div>
      <button type="submit" className={styles.submitButton}>Find</button>
      {
        data.length > 50 ? <></> :
        <button type="reset" className={styles.resetButton}>Show table</button>
      }
    </form>
  );
}

export default FilterForm;
