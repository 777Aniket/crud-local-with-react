import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getListOfEmployees } from "../styles/service/localStorage";

  const EmployeeItem = ({ employee ,setEmployees}) => {
  const { id, name, email, phone, address } = employee;
  const navigate = useNavigate();

  const deleteEmployeeHandler=()=>{
    deleteEmployee(id);
    setEmployees(getListOfEmployees())
  }
  return (
    <tr   className="table-primary">
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>
        <div className="d-flex gap-3">
          <span
            className="badge bg-success"
            role="button"
            onClick={() => navigate(`/edit-employees/${id}`)}
          >
            Edit
          </span>
          <span className="badge bg-danger" role="button" onClick={()=>deleteEmployeeHandler}>
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeItem;

