import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/NavBar.css';
import tierra from '../img/tierra.png';
import user from '../img/user.png';
import ModalUser from "./ModalUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserContext } from "../context/userContext";

const Navbar = () => {

    const context = useUserContext();

    function isLogged ()
    {
        const username = window.localStorage.getItem('UserName');
        
        if(window.localStorage.getItem('isLogged'))
        {

            return(
                <>
                    <button variant="primary" className="userItem" onClick={context.logOut} >
                        <img className="user" src={user} alt="user" />
                        <p className="nav-User">{username}</p>
                    </button>
                </>
            );
        }
        else{
            return(
                <>
                    <ModalUser/>
                </>
            );
        }
    }

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
                            {isLogged()}
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