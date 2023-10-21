import { createContext, useState } from "react";
import PropTypes from "prop-types";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };

EmployeeProvider.propTypes = {
  children: PropTypes.node,
};
