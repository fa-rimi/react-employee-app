import "../App.css";

function EmployeeListItem(props) {
  return (
    <div className="employee-list-item">
      {console.log("EmployeeListItem generating...")}
      <div className='pic'>{props.img}</div>
          <div className='info'>
              <h2 className="info-items">{props.name}</h2>
              <p className="info-items">{props.role}</p>
          </div>
    </div>
  );
}

export default EmployeeListItem;

