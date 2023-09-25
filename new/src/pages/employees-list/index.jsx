import Navbar from "../../components/navbar";
import useEmployees from "../../hooks/useEmployees";
import Table from "./components/table";
import styles from "./styles.module.css";

function EmployeesList() {
  const { employees } = useEmployees();
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Current Employees</h2>
        <Table employees={employees} />
      </main>
    </>
  );
}

export default EmployeesList;
