import React, { createContext, useState } from "react";

// Create the context
const EmployeeContext = createContext();

// Create the provider component
const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
