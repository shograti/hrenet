import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeesList from "./pages/employees-list";
import Home from "./pages/home";
import { EmployeeProvider } from "./contexts/EmployeesContext";

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/employees-list" element={<EmployeesList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
