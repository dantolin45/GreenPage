import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import user from '../img/user.png';
import '../styles/ModalUser.css';

const ModalUser = () => {
   
 
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    
    const handleClose = () => setShow(false);
    

    return (
        <>
            <button variant="primary" className="userItem" onClick={handleShow}>
                                <img className="user" src={user} alt="tierra" />
            </button>

           <Modal className="modalUser"
            show={show}         
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton className="modalHeader">
                    <Modal.Title className="modalTitle">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalUser;