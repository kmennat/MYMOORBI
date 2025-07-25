import React from "react";
import './Login.css';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { Link } from 'react-router-dom';



function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setUsername('');
        setPassword('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await login(username, password);
        if (error) {
            alert(error);
        } else {
            navigate('/');
            resetForm();
        }
        setIsLoading(false);

    };
return(

<div class="login-wrap">
        

        <div class="container">
        <div class="login-form">
            <h2>Log in</h2>
            <form onSubmit={handleLogin}>
                <div class="input-group">
                    <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username" required />
                </div>
                <div class="input-group password-group">
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <span class="eye-icon">👁</span>
                </div>
                <div class="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
    </div>
</div>

);
}
export default Login;
