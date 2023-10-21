import { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function Select({ title, options, department, setDepartment }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        {!department ? title : department}
        <span className={styles.chevron}>&#10132;</span>
      </div>
      {isOpen ? (
        <div className={styles.select_menu}>
          {options.map((option, index) => (
            <div
              onClick={() => {
                setDepartment(option);
                setIsOpen(false);
              }}
              key={index}
              className={styles.select_menu_item}
            >
              {option}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

Select.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  department: PropTypes.string,
  setDepartment: PropTypes.func,
};

export default Select;
