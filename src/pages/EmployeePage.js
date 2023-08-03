import "../App.css";
import Header from "../components/Header";
import Employee from "../components/Employee";

function EmployeePage() {
  //! I forgot to add return at first and my Employee Page would not display
  return (

  <div className="employee-pg">
    <Header title="Employees"/>
    <Employee/>
    {console.log("EmployeePage is connected!")}
  </div>

  )
}

export default EmployeePage;