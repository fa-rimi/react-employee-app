import "../App.css";

function EmployeeListItem(employees) {
  return (
    <div className="employee-list-item">
      {console.log("EmployeeListItem generating...")}
      {employees.map((employee, index) => (
        <EmployeeListItem
          key={index}
          name={employee.name}
          role={employee.role}
        />
      ))}
      {console.log("EmployeeList generating...")}
      {console.log(employees)}
    </div>
  );
}

export default EmployeeListItem