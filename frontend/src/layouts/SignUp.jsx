import React from "react";
import './SignUp.css';
function SignUp(){
return(
<>
<section className="form-section">
                <div className="form-container">
                    <h1>Sign up now</h1>
                    <p className="subtitle">It's free and only takes two minutes.</p>
                    
                    <form className="signup-form">
                        <div className="input-group">
                            <input type="text" placeholder="Full name" required/>
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="E-mail" required/>
                        </div>
                        <div className="input-group password-group">
                            <input type="password" placeholder="Password" required/>
                            <button type="button" className="password-toggle">👁</button>
                        </div>
                        
                        <p className="terms-text">
                            By signing up you accept MORBI'S 
                            <a href="#" className="link">GTC</a> and 
                            <a href="#" className="link">Privacy Policy</a>.
                        </p>
                        
                        <button type="submit" className="btn-continue">continue</button>
                    </form>
                </div>
            </section>

            
            <section className="marketing-section">
                <div className="marketing-content">
                    <h2>Connect with the <br/>best to create<br/> your <span className="highlight">dream team</span></h2>
                </div>
            </section>
            </>
           );
        }
        export default SignUp;