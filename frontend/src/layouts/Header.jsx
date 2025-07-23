import React from "react";
import hstyles from './Header.css?inline';
function Header(){
return(
<header className="header">
    <button className="mobile-menu-btn">☰</button>
    <div className="logo">
        <img src="./src/assets/logo.png" alt="Logo" className="logo-img"/>
    </div>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="search"/>
        <span className="search-icon">🔍</span>
    </div>
    <button className="dropdown-btn">▼</button>
</header>

);
}
export default Header;
