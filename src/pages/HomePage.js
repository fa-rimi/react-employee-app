import "../App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";

function HomePage() {
  return (

    <div className="home-pg">
      <Header/>
      <SearchBar/>
      <EmployeeList/>
      {console.log("Homepage is connected")}
    </div>

  )
}

export default HomePage;
