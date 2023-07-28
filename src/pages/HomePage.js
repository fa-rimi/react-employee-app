import "../App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (

    <div className="home-pg">
      <Header/>
      <SearchBar/>
      {console.log("Homepage is connected")}
    </div>

  )
}

export default HomePage;
