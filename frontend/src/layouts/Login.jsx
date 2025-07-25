import React from "react";
import './Login.css';
function Login(){
return(

<div class="login-wrap">
        

        <div class="container">
        <div class="login-form">
            <h2>Log in</h2>
            <form>
                <div class="input-group">
                    <input type="text" id="username" name="username" placeholder="Username" required />
                </div>
                <div class="input-group password-group">
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <span class="eye-icon">👁</span>
                </div>
                <div class="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="login-btn">log in</button>
            </form>
        </div>
    </div>
</div>

);
}
export default Login;
