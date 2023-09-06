import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="department">Department</label>
        <select id="department">
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
            <input type="text" id="firstName" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.input_container}>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="state">State</label>
            <input type="text" id="state" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" />
          </div>
        </div>
      </div>
      <div className={styles.button_container}>
        <button type="button">Save</button>
        <Link to="/employees-list">
          View Current Employees <span> &#8594;</span>
        </Link>
      </div>
    </form>
  );
}

export default Form;
