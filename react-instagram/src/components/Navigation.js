import "../styles/Navigation.css";
import logo from "../images/instagramLogo.png";
import searchItem from "../images/searchIcon.png";
import Menu from "./Menu";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img src={logo} alt="instagram logo" className="logo" />
        <div className="search">
          <img src={searchItem} alt="search icon" className="searchIcon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
