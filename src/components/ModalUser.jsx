import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import user from '../img/user.png';
import '../styles/ModalUser.css';
import FormikUser from "./FormikUser";

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
                    <FormikUser/>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default ModalUser;