import styles from "./styles.module.css";
import arrow from "../../../../assets/arrow.svg";

function Table() {
  const data = [
    {
      firstName: "Jean",
      lastName: "Dupont",
      startDate: "01/02/2023",
      department: "Sales",
      dob: "01/02/2023",
      street: "5 rue des postes",
      city: "Lille",
      state: "Nord",
      zipCode: "59000",
    },
  ];

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
        {data.length === 0 ? (
          <tr>
            <td colSpan="9">No data available in table</td>
          </tr>
        ) : (
          data.map((row, index) => (
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

export default Table;
