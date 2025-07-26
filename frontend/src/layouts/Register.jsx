import { Heading1 } from "lucide-react";
import React from "react";
import './Register.css';
function Register(){
return(
<>
    <div className="container">
    <table >
        
            
                <tr>
                    <td>
            <h1 className="form-title">Register now</h1>
            <p className="form-subtitle">And become part of our team</p>
            </td>
            </tr>
            <div className="form-section">
            <tr>
            <td>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Last name" required />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Username" required />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="E-mail" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm password" required />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Address Line 1" required />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Address Line 2" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <input type="text" placeholder="State" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="City" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Zip code" required />
                    </div>
                </div>

                <div className="checkbox-group">
                    <input type="checkbox" id="terms" required />
                    <label for="terms">I have read the terms and conditions</label>
                </div>

                <button type="submit" className="register-btn">register</button>
            </form>
            </td>
            <td>
            <div className="hero-section">
        <h2 className="hero-title">
                Connect with the<br />
                best to create<br />
                your <span className="highlight">dream team</span>
                
            </h2>
            </div>
            </td>
            </tr>
            
        
            </div>
            </table>
            
        </div>

        
        
    </>
    
    );
    }

export default Register;