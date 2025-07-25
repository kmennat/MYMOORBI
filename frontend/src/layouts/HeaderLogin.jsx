import React from "react";
import './Register.css';
function HeaderLogin(){
return(
<>
<header class="header">
   <div class="logo">
<img src="./src/assets/logo.png" alt="Logo" class="logo-img"/>
</div>
    <div class="auth-buttons">
        <button class="btn-outline">log in</button>
        <button class="btn-primary">register</button>
    </div>
</header>
</>
    
    );
    }

export default HeaderLogin;