import React, { useState } from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { markUserRecovered, addUsersToQuarantine } from "../redux/user/actions"
import styles from "./style.module.css"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

export default function Covid(props) {
    const { employees } = useSelector((state) => state.user);

    const [show, setShow] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [currentEmp, setCurrentEmp] = useState({});
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleDialogClose = () => setShowDialog(false);

    const handleShow = (e, item) => {
        setShow(true)
        setCurrentEmp(item)
    };

    const markRecovered = (e, id) => {
        let temp = { id: id }
        dispatch(markUserRecovered(temp))
        handleDialogClose()
    }

    const addToQuarantine = (e) => {
        dispatch(addUsersToQuarantine({ ids: currentEmp.Contacts }))
        handleClose()
    }

    const handleShowDialog = (e, item) => {
        setShowDialog(true)
        setCurrentEmp(item)
    };

    return (
        <div style={{ margin: "20px 10%" }}>
            <div>
                <InputGroup className="mb-3" style={{ width: "40%" }}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={(e) => setInput(e.target.value.toLowerCase())}
                        placeholder="search employees"
                        value={input}
                        aria-label="input"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                {employees.filter((item) => item.Name.toLowerCase().includes(input)).filter((item) => item.Covid === true).length === 0 ? <div>
                    <div>No employees found</div>
                    <Button style={{ marginTop: "20px" }} onClick={() => props.handleSelect(1)}>View all employees</Button>
                </div> :
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
                                <td><Button onClick={(e) => handleShowDialog(e, item)} variant={"success"}>{"Mark Recover"}</Button></td>
                            </tr>))}
                        </tbody>
                    </Table>
                }
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employees to be quarantined</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{`COVID+ve : ${currentEmp && currentEmp.EmpId}, ${currentEmp.Name && currentEmp.Name}`}</p>
                    <div className={styles.dataRow}>
                        <div>{`# of employees : ${currentEmp.Contacts && currentEmp.Contacts.length} `}</div>
                        <div>|</div>
                        <div>{`  Man days:${currentEmp.Contacts && currentEmp.Contacts.length * 5}`}</div>
                        <div>|</div>
                        <div>{`Man days saved: ${currentEmp.Contacts && (currentEmp.Contacts.length * 7) - currentEmp.Contacts.length * 5}`}</div>
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

            {/* confirmation modal */}
            <Modal show={showDialog} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{`Do you want to mark ${currentEmp.EmpId}, ${currentEmp.Name} has recovered from COVID+ve`}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleDialogClose} variant="secondary">Cancel</Button>
                    <Button onClick={(e) => markRecovered(e, currentEmp.EmpId)} variant="danger">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
