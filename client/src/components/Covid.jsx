import React, { useState } from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { markUserRecovered, addUsersToQuarantine } from "../redux/user/actions"
import styles from "./style.module.css"

export default function Covid() {
    const { employees } = useSelector((state) => state.user);

    const [show, setShow] = useState(false);
    const [currentEmp, setCurrentEmp] = useState({});

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);

    const handleShow = (e, item) => {
        setShow(true)
        setCurrentEmp(item)
    };

    const markRecovered = (e, id) => {
        let temp = { id: id }
        dispatch(markUserRecovered(temp))
        handleClose()
    }

    const addToQuarantine = (e) => {
        dispatch(addUsersToQuarantine(currentEmp.Contacts))
        handleClose()
    }

    return (
        <div style={{ margin: "20px 10%" }}>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Emp id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Quarantine Days</th>
                        <th># of quarantines</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.filter((item) => item.Covid === true).map((item => <tr key={item.EmpId}>
                        <td>{item.EmpId}</td>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Designation}</td>
                        <td>{item.quarantineDays}</td>
                        <td style={{ color: 'DodgerBlue' }} onClick={(e) => handleShow(e, item)} >{item.Contacts.length}</td>
                        <td><Button onClick={(e) => markRecovered(e, item.EmpId)} variant={"success"}>{"Mark Recover"}</Button></td>
                    </tr>))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employees to be quarantined</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{`COVID+ve : ${currentEmp && currentEmp.EmpId}, ${currentEmp.Name && currentEmp.Name}`}</p>
                    <div className={styles.dataRow}>
                        <div>{`# of employees : ${currentEmp.Contacts && currentEmp.Contacts.length} `}</div>
                        <div>|</div>
                        <div>{`  Man days:${currentEmp.Contacts && currentEmp.Contacts.length}`}</div>
                        <div>|</div>
                        <div>{`Man days saved: ${currentEmp.Contacts && currentEmp.Contacts.length * 5}`}</div>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Emp id</th>
                                <th>Name</th>
                                <th>Recommended Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEmp.Contacts && currentEmp.Contacts.map((item) => <tr key={item}>
                                <td>{item}</td>

                                <td>{employees.filter((emp) => emp.EmpId === item)[0].Name}</td>
                                <td>{employees.filter((emp) => emp.EmpId === item)[0].quarantineDays}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Cancel</Button>
                    <Button variant="primary" onClick={(e) => addToQuarantine(e)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
