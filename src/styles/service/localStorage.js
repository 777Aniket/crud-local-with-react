import uuid from "react-uuid";

export const getListOfEmployees = () => {
  if (!localStorage["@employees"]) {
    localStorage["@employees"] = JSON.stringify([]);
  }
  // let employees = localStorage["@employees"]
  let employees = JSON.parse(localStorage["@employees"]);
  return employees;
};

// export const getEmployeeById = (id) => {
//   const employees = getListOfEmployees();
//   const employee = employees.find((employee) => employee.id === id);
//   return employee;
// };

export const getEmployeeById = (id) => {
  const employees = getListOfEmployees();
  const employee = employees.find((employee) => employee.id === id);
  return employee;
};

export const addEmployee = (employee) => {
  const employees = getListOfEmployees();
  employees.push({ id: uuid(), ...employee });
  localStorage["@employees"] = JSON.stringify(employees);
};

export const editEmployee = (id, newEmployee) => {
  let employee = getListOfEmployees();
  employee = employee.filter((employee) => employee.id !== id);
  employee.push(newEmployee);
  localStorage["@employees"] = JSON.stringify(employee);
};

export const deleteEmployee=(id)=>{
    let employee = getListOfEmployees();
    employee = employee.filter((employee) => employee.id !== id);
    localStorage["@employees"] = JSON.stringify(employee);
}