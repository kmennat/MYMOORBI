import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Content from './Content';
import Sidebar from './Sidebar';
import './Header.css';
import { Outlet } from 'react-router-dom';
function MainLayout(){
    return(
        <>
        
            <Header/>
            <div class="container">
            
            <table>
                <tr>
                    <td>
            <Sidebar/>
            </td>
            <td>
            <main className="main-content">
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