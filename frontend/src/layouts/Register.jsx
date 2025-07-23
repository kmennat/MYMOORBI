import { Heading1 } from "lucide-react";
import React from "react";
import './Register.css';
function Register(){
return(
<>
    <div class="container">
        <div class="form-section">
            <h1 class="form-title">Register now</h1>
            <p class="form-subtitle">And become part of our team</p>
            
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" placeholder="First name" required />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Last name" required />
                    </div>
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Username" required />
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="E-mail" required />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Confirm password" required />
                    </div>
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Address Line 1" required />
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Address Line 2" />
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <input type="text" placeholder="State" required />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="City" required />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Zip code" required />
                    </div>
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" id="terms" required />
                    <label for="terms">I have read the terms and conditions</label>
                </div>

                <button type="submit" class="register-btn">register</button>
            </form>
        </div>

        <div class="hero-section">
        <h2 class="hero-title">
                Connect with the<br />
                best to create<br />
                your <span class="highlight">dream team</span>
            </h2>
        </div>
        </div>
    </>
    
    );
    }

export default Register;