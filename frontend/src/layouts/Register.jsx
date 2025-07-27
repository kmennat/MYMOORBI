import { Heading1 } from "lucide-react";
import React from "react";
import rstyle from './Register.module.css';
function Register(){
return(
<>
    <div className={rstyle.container}>
            
            <div className={rstyle.form_section}>
            <h1 className={rstyle.form_title}>Register now</h1>
            <p className={rstyle.form_subtitle}>And become part of our team</p>
            <form>
                <div className={rstyle.form_row}>
                    <div className={rstyle.form_group}>
                        <input type="text" placeholder="First name" required />
                    </div>
                    <div className={rstyle.form_group}>
                        <input type="text" placeholder="Last name" required />
                    </div>
                </div>

                <div className={rstyle.form_group}>
                    <input type="text" placeholder="Username" required />
                </div>

                <div className={rstyle.form_row}>
                    <div className={rstyle.form_group}>
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <div className={rstyle.form_group}>
                        <input type="email" placeholder="E-mail" required />
                    </div>
                </div>

                <div className={rstyle.form_row}>
                    <div className={rstyle.form_group}>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className={rstyle.form_group}>
                        <input type="password" placeholder="Confirm password" required />
                    </div>
                </div>

                <div className={rstyle.form_group}>
                    <input type="text" placeholder="Address Line 1" required />
                </div>

                <div className={rstyle.form_group}>
                    <input type="text" placeholder="Address Line 2" />
                </div>

                <div className={rstyle.form_row}>
                    <div className={rstyle.form_group}>
                        <input type="text" placeholder="State" required />
                    </div>
                    <div className={rstyle.form_group}>
                        <input type="text" placeholder="City" required />
                    </div>
                    <div className={rstyle.form_group}>
                        <input type="text" placeholder="Zip code" required />
                    </div>
                </div>

                <div className="checkbox_group">
                    <input type="checkbox" id="terms" required />
                    <label for="terms">I have read the terms and conditions</label>
                </div>

                <button type="submit" className={rstyle.register_btn}>register</button>
            </form>
            </div>
            <div className={rstyle.hero_section}>
        <h2 className={rstyle.hero_title}>
                Connect with the<br />
                best to create<br />
                your <span className={rstyle.highlight}>dream team</span>
                
            </h2>
            
            
        
            </div>
            
        </div>

        
        
    </>
    
    );
    }

export default Register;