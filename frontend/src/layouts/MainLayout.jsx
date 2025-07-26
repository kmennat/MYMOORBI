import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Content from './Content';
import Sidebar from './Sidebar';
import './Header.css';
import { Outlet } from 'react-router-dom';
//import { useAuthStore } from '../store/auth'
import { useAuth } from '../context/AuthContext';
function MainLayout(){
    const { isLoggedIn } = useAuth();

    return(
        
        <>
        <Header/>
        
            
            <div >
            <table>
                <tr>
                    <td>
            <Sidebar/>
            </td>
            <td>
            <main >
            <Outlet /> 
            </main>
            </td>
            </tr>
            </table>
            </div>
            <Footer/>
            </>
        
            
        

    );
}

export default MainLayout;