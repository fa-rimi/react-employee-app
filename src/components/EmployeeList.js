import "../App.css";
import EmployeeListItem from "../components/EmployeeListItem";

const employees = [
  { name: "James King", role: "President and CEO" },
  { name: "Julie Taylor", role: "VP of Marketing" },
  { name: "Eugene Lee", role: "CFO" },
  { name: "John Williams", role: "VP of Engineering" },
  { name: "Ray Moore", role: "VP of Sales" },
  { name: "Paul Jones", role: "QA Manager" },
];

function EmployeeList() {
  return (
    <div className="employee-list-item">
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

export default EmployeeList;
