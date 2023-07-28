import "../App.css";
import EmployeeListItem from "../components/EmployeeListItem";

function EmployeeList() {
    return (
    
        <div className="employee-list">
            <EmployeeListItem/>
            {console.log("EmployeeList is live!")}
        </div>

    )
}

export default EmployeeList;