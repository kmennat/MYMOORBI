import React from "react";

import { Outlet, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logoImg from '../assets/logo.png';
import Header from "./HeaderLogin";
import Footer from './Footer';
import Content from './Content';
import Sidebar from './Sidebar';
import './Header.css';

function MainLogin(){
    const location = useLocation();
    const isLogin = location.pathname === '/mylogin';
    const isRegister = location.pathname === '/myregister';

    return(
        <>
        
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={logoImg} alt="MORBI" className={styles.logoImg} />
                </div>

                <div className={styles.middle}></div>

                <div className={styles.buttons}>
                    <NavLink to="/mylogin">
                        <button
                        className={`${styles.login} ${isLogin ? styles.active : styles.inactive}`}
                        >
                        log in
                        </button>
                    </NavLink>
                    <NavLink to="/myregister">
                        <button
                            className={`${styles.register} ${isRegister ? styles.active : styles.inactive}`}
                            >
                            register
                        </button>
                    </NavLink>
                </div>
            </header>

                     
            
            <main className={styles.main_content}>
            <Outlet /> 
            </main>
            
            
          
            <Footer/>
            </>
        
            
        

    );
}

export default MainLogin;