// import "../App.css";

function EmployeeListItem(props) {
  return (
    <div className="employee-list-item">
      {console.log("EmployeeListItem generating...")}
      <div className='pic'>{props.img}</div>
          <div>
              <h2>{props.name}</h2>
              <p>{props.role}</p>
          </div>
    </div>
  );
}

export default EmployeeListItem;

