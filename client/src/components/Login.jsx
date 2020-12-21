import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import styles from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/auth/actions';

export default function Login() {
    const { loginError } = useSelector((state) => state.auth);

    useEffect(() => {
        if (loginError) {
            handleShow()
        }
    }, [loginError])



    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        dispatch(loginUser({ username, password }));
    }

    return (
        <div>
            <h1 style={{ marginTop: "80px" }}>Login</h1>
            <Card style={{ width: "500px", padding: "40px", margin: "auto", marginTop: "30px" }}>
                <form className={styles.loginForm} onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={(e) => setUsername(e.target.value)} className={styles.loginInput} required placeholder="enter username"></input>
                    <input onChange={(e) => setPassword(e.target.value)} className={styles.loginInput} required placeholder="enter password"></input>
                    <Button type="submit" className={styles.loginButton} variant="primary">Login</Button>
                </form>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Invalid Credentials</Modal.Title>
                </Modal.Header>

            </Modal>
        </div>
    )
}
