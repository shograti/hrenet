import Form from "./components/form";
import Navbar from "../../components/navbar";
import styles from "./styles.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Create Employee</h2>
        <Form />
      </main>
    </>
  );
}

export default Home;
