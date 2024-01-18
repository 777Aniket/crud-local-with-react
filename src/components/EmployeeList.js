import React, { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem";
//import {   } from "../styles/service/localStorage";
import { getListOfEmployees } from "../styles/service/localStorage";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getListOfEmployees());
  }, []);
  return (
    <div>
      <h1 className="my-5 text-center">Manage Employee</h1>

      {employees.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr className="fw-bold">
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => 
                <EmployeeItem
                  key={employee.id}
                  employee={employee}
                  setEmployees={setEmployees}
                />
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No Employees</h3>
      )}
    </div>
  );
};

export default EmployeeList;
