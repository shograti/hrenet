import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import DatePicker from "../../../../lib";
import useEmployees from "../../../../hooks/useEmployees";

function Form() {
  const { employees, setEmployees } = useEmployees();

  const [department, setDepartment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const formatDate = (date) => {
    const d = new Date(date);
    const day = ("0" + d.getDate()).slice(-2);
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      department,
      firstName,
      lastName,
      dob,
      startDate,
      street,
      city,
      state,
      zipCode,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_container}>
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="" disabled>
            Select a department
          </option>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="humanResources">Human Resources</option>
          <option value="legal">Legal</option>
        </select>
      </div>
      <div className={styles.columns_container}>
        <div className={styles.column}>
          <div className={styles.input_container}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="dob">Date of Birth</label>
            <DatePicker onChange={(e) => setDob(formatDate(e.target.value))} />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              onChange={(e) => setStartDate(formatDate(e.target.value))}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.input_container}>
            <label htmlFor="street">street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.button_container}>
        <button type="submit">Save</button>
        <Link to="/employees-list">
          View Current Employees <span> &#8594;</span>
        </Link>
      </div>
    </form>
  );
}

export default Form;
