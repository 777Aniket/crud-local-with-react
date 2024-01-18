import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import {
  addEmployee,
  editEmployee,
  getEmployeeById,
} from "../styles/service/localStorage.js";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showAlert, setShowAlert] = useState(false);

  const { input, handlerInputChange, resetForm, setForm } = useForm({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    id ? editEmployee(id, input) : addEmployee(input);
    addEmployee(input);
    setShowAlert(true);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div className="container">
      <div className="d-flex my-5 justify-content-between">
        <h1> {id ? "Edit" : "Create"} Employee</h1>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>

      {/* Header */}

      {/* form-body start from here  */}

      <div className="card border-primary p-5 m-5">
        <form action="" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="name" className="form-label mt-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={input.name}
              onChange={handlerInputChange}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label mt-2">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              value={input.phone}
              type="text"
              onChange={handlerInputChange}
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={input.email}
              onChange={handlerInputChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label mt-2">
              Addrees
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={input.address}
              onChange={handlerInputChange}
              className="form-control"
              placeholder="Enter your address"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success text-white">
            Well Done !! A new Employees has been Added to the list
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
