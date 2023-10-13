import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/NavBar.css';
import tierra from '../img/tierra.png';

import ModalUser from "./ModalUser";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {


    return (
        <>

            <div className="navContent" >
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <ul className="navbar-separator" >
                        <li className="nav-item-home">
                            <Link className="nav-link-router" to="/">
                                <img className="image" src={tierra} alt="tierra" />
                            </Link>
                        </li>
                        <div className="nav-items">
                            <li className="nav-item-li">
                                <Link className="nav-link-router" to="/info">Informacion</Link>
                            </li>
                            <li className="nav-item-li">
                                <Link className="nav-link-router" to="/cuestionario">Quiz!</Link>
                            </li>

                        </div>
                        <li className="nav-user-item">
                            <ModalUser/>
                        </li>
                    </ul>
                </div>
                </nav>
                
                <Outlet />
            </div>

            
            
        </>
    );
}

export default Navbar;