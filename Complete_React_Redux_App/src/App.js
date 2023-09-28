import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import TodoComponent from "./components/TodoComponent/ConnectedTodoComponent";
import EmployeeComponent from "./components/EmployeeComponent/ConnectedEmployeeComponent";
import EmployeeComponentRTK from './components/EmployeeComponentRTK/ConnectedEmployeeComponentRTK'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/App">Home</Link>
            </li>
            <li>
              <Link to="/Todo">To Do </Link>
            </li>
            <li>
              <Link to="/employeeList">Employee List</Link>
            </li>
            <li>
              <Link to="/employeeListRTK">Employee List RTK</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Todo" element={<TodoComponent />}></Route>
          <Route path="/employeeList" element={<EmployeeComponent />}></Route>
          <Route path="/employeeListRTK" element={<EmployeeComponentRTK />}></Route>
          <Route path="/App"></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
