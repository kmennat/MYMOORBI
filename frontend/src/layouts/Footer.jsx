import React from "react";
import './Footer.css';
function Footer(){
return(
<footer class="footer">
        <div class="footer-links">
            <a href="#" class="footer-link">AGB</a>
            <a href="#" class="footer-link">Impressum</a>
            <a href="#" class="footer-link">MORBI group</a>
            <a href="#" class="footer-link">Contact</a>
        </div>
        <div class="footer-right">
            <button class="language-selector">EN ▼</button>
            <div class="copyright">© MORBI 2021</div>
            <a href="#" class="footer-link">GTC</a>
            <a href="#" class="footer-link">Privacy Policy</a>
        </div>
    </footer>
);
}
export default Footer;