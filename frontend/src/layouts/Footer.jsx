import React from "react";
import './Footer.css';
function Footer(){
return(
<footer className="footer">
        <div className="footer-links">
            <a href="#" className="footer-link">AGB</a>
            <a href="#" className="footer-link">Impressum</a>
            <a href="#" className="footer-link">MORBI group</a>
            <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="footer-right">
            <button className="language-selector">EN ▼</button>
            <div className="copyright">© MORBI 2021</div>
            <a href="#" className="footer-link">GTC</a>
            <a href="#" className="footer-link">Privacy Policy</a>
        </div>
    </footer>
);
}
export default Footer;