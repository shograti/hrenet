import Form from "./components/form";
import Navbar from "../../components/navbar";
import styles from "./styles.module.css";
import { useRef } from "react";
import Modal from "../../components/modal";

function Home() {
  const modal = useRef(null);
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Create Employee</h2>
        <Form modal={modal} />
      </main>
      <Modal ref={modal} />
    </>
  );
}

export default Home;
