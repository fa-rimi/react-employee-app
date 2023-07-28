// * The main App consist of 2 main components -> Left: HomePage & Right: EmployeePage
import "./App.css"; // importing styling
import HomePage from "./pages/HomePage"; // left side: import the homepage component
import EmployeePage from "./pages/EmployeePage"; // right side: import EmployeePage

function App() {
  return (
    <div className="App">
      <HomePage/>
      <EmployeePage/>
    </div>
  );
}

export default App;
