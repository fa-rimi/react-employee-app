import "../App.css";

function Header(props) {
    return (

        <div className="header-section">
            <h1>{props.title}</h1>
            {console.log("Header is live!")}
        </div>

    )
}

export default Header;