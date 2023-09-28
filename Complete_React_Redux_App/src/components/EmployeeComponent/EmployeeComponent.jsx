import React, { useEffect } from "react";
import _ from "loadsh";

const EmployeeComponent = ({ employeeList, fecthEmployeeList }) => {
  useEffect(() => {
    fecthEmployeeList();
  }, [fecthEmployeeList]);
  return (
    <div className="employeeContainer">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {!_.isEmpty(employeeList) &&
            _.map(employeeList, (list) => {
              return(
              <tr key={list.id}>
                <th scope="row">{list.id}</th>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td>{list.email}</td>
              </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeComponent;
