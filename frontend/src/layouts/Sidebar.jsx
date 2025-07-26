import React from "react";
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import barstyle from './Sidebar.module.css';

function Sidebar(){
    const location = useLocation();
    const isHome = location.pathname === '/home';
    const isVideo = location.pathname === '/videos';
    const isInbox = location.pathname === '/inbox';
    const isSetting = location.pathname === '/settings';

    return(

<>

<div className="sidebar-overlay"></div>
        <aside className="sidebar">
            <div className="profile-section">
                <div className="avatar">👤</div>
                <div className="welcome-text">Welcome back,</div>
                <div className="user-name">John Doe</div>
            </div>
            <nav>
                   <ul className="nav-menu">
                    <li>
                        <a href="/home" className={`${barstyle.nav_item} ${isHome ? barstyle.nav_item.active : barstyle.nav_item.inactive}`}>
                            <svg width="20" height="20" className="nav-icon" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/videos" className={`${barstyle.nav_item} ${isVideo ? barstyle.nav_item.active : barstyle.nav_item.inactive}`}>
                            <svg width="20" height="20" className="nav-icon" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            </svg>
                            My videos
                        </a>
                    </li>
                    <li>
                        <a href="/inbox" className={`${barstyle.nav_item} ${isInbox ? barstyle.active : barstyle.inactive}`}>
                            <svg width="20" height="20" className="nav-icon" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            Inbox
                        </a>
                    </li>
                    <li>
                        <a href="/settings" className={`${barstyle.nav_item} ${isSetting ? barstyle.active : barstyle.inactive}`}>
                            <svg width="20" height="20" className="nav-icon" viewBox="0 0 20 20">
                                <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                            </svg>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        </>
           );
        }
        export default Sidebar;