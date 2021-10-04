import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import './Nav.css';
import SidebarData from './SidebarData';

const Nav = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>


            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </Link>
                        <li><img className="navbar-left" src={logo}/></li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav
