import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux"
import { logout } from "../redux/auth/actions"

export default function Navbar(props) {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true)
    };

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div style={{ borderBottom: "1px solid black" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 8%", padding: "5px" }}>
                <h2>Covid19 Manager</h2>
                <svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ height: "40px", width: "40px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure to Logout?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={handleLogout} variant="primary">Confirm</Button>
                </Modal.Body>
            </Modal>
        </div>

    )
}
