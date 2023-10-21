import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
/* import DatePicker from "../../../../lib"; */
import useEmployees from "../../../../hooks/useEmployees";
import Select from "../../../../components/select";
import DatePicker from "rci-datepicker"; 
import PropTypes from "prop-types";

const OPTIONS = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

function Form({ modal }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setEmployees([
        ...employees,
        {
          department,
          firstName,
          lastName,
          dob,
          startDate,
          street,
          city,
          state,
          zipCode,
        },
      ]);
      modal.current.show({
        title: "Success",
        message: "The employee has been created",
        link: {
          message: "View Current Employees →",
          path: "/employees-list",
        },
      });
    } catch (error) {
      modal.current.show({
        title: "Error",
        message: "An unhandled error occurred",
        link: {
          message: "Go Back",
          path: "/",
        },
      });
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const day = ("0" + newDate.getDate()).slice(-2);
    const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_container}>
        <label htmlFor="department">Department</label>
        <Select
          options={OPTIONS}
          title="Select a department"
          department={department}
          setDepartment={setDepartment}
        />
      </div>
      <div className={styles.columns_container}>
        <div className={styles.column}>
          <div className={styles.input_container}>
            <label htmlFor="firstName">First Name</label>
            <input
              required
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="lastName">Last Name</label>
            <input
              required
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="dob">Date of Birth</label>
            <DatePicker
              required
              onChange={(e) => setDob(formatDate(e.target.value))}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              required
              onChange={(e) => setStartDate(formatDate(e.target.value))}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.input_container}>
            <label htmlFor="street">Street</label>
            <input
              required
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="city">City</label>
            <input
              required
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="state">State</label>
            <input
              required
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              required
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.button_container}>
        <button type="submit">Submit</button>
        <Link to="/employees-list">
          View Current Employees <span> &#8594;</span>
        </Link>
      </div>
    </form>
  );
}

Form.propTypes = {
  modal: PropTypes.object,
};

export default Form;
