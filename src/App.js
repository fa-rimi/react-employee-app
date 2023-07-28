// * The main App consist of 2 main components -> Left: HomePage & Right: EmployeePage
import "./App.css"; // importing styling
import HomePage from "../src/components/HomePage"; // left side: import the homepage component
import EmployeePage from "../src/components/EmployeePage"; // right side: import the employeepage component

function App() {
  return (
    <div class="App">
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;
