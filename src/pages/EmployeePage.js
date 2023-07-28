import "../App.css";
import Header from "../components/Header";

function EmployeePage() {
  //! I forgot to add return at first and my Employee Page would not display
  return (

  <div className="employee-pg">
    <Header/>
    {console.log("EmployeePage is connected!")}
  </div>

  )
}

export default EmployeePage;