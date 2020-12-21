import React, { useState } from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useSelector, useDispatch } from 'react-redux';
import Modal from "react-bootstrap/Modal"
import { markUserPositive, markUserRecovered } from "../redux/user/actions"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

export default function AllEmployees() {
    const { employees } = useSelector((state) => state.user);

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [currentEmp, setCurrentEmp] = useState({});
    const [input, setInput] = useState("")

    const handleClose = () => setShow(false);

    const handleShow = (e, item) => {
        setShow(true)
        setCurrentEmp(item)
    };

    const markPositive = (e, id) => {
        let temp = { id: id }
        dispatch(markUserPositive(temp))
        handleClose()
    }

    const markRecovered = (e, id) => {
        let temp = { id: id }
        dispatch(markUserRecovered(temp))
        handleClose()
    }

    const getStatus = (item) => {
        if (item.Covid === true) {
            return "Covid+ve"
        }
        else if (item.Quarantined === true) {
            return "Quarantined"
        }
        else {
            return "Healthy"
        }
    }

    return (
        <div style={{ margin: "20px 10%" }}>
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
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Emp id</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.filter((item) => item.Name.toLowerCase().includes(input)).map((item => <tr key={item.EmpId}>
                        <td>{item.EmpId}</td>
                        <td>{getStatus(item)}</td>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Designation}</td>
                        <td><Button onClick={(e) => handleShow(e, item)} variant={item.Covid === false && item.Quarantined === false ? "danger" : "success"}>{item.Covid === false && item.Quarantined === false ? "Mark Covid" : "Mark Recover"}</Button></td>
                    </tr>))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{`Do you want to mark ${currentEmp.EmpId}, ${currentEmp.Name} as ${currentEmp.Covid === false ? "" : "recovered from"} COVID+ve`}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Cancel</Button>
                    <Button onClick={currentEmp.Covid === false && currentEmp.Quarantined === false ? (e) => markPositive(e, currentEmp.EmpId) : (e) => markRecovered(e, currentEmp.EmpId)} variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
