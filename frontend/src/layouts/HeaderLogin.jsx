import React from "react";
import './Register.css';
function HeaderLogin(){
return(
<>
<header className="header">
   <div className="logo">
<img src="./src/assets/logo.png" alt="Logo" className="logo-img"/>
</div>
    <div className="auth-buttons">
        <button className="btn-outline">log in</button>
        <button className="btn-primary">register</button>
    </div>
</header>
</>
    
    );
    }

export default HeaderLogin;