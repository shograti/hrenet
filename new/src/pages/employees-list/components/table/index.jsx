import styles from "./styles.module.css";
import PropTypes from "prop-types";

function Table({ employees }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td className={styles.no_employees} colSpan="9">
              No data available in table
            </td>
          </tr>
        ) : (
          employees.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.startDate}</td>
              <td>{row.department}</td>
              <td>{row.dob}</td>
              <td>{row.street}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.zipCode}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      startDate: PropTypes.string,
      department: PropTypes.string,
      dob: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipCode: PropTypes.string,
    }),
  ),
};

export default Table;
