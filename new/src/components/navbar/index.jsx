import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo} onClick={() => navigate("/")}>
        HR<sub>net</sub>
      </h1>
    </header>
  );
}

export default Navbar;
