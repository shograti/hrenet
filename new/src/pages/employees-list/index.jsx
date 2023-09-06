import Navbar from "../../components/navbar";
import Table from "./components/table";
import styles from "./styles.module.css";

function EmployeesList() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Current Employees</h2>
        <Table />
      </main>
    </>
  );
}

export default EmployeesList;
