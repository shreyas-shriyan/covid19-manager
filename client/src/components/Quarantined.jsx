import React, { useState } from 'react'
import Table from "react-bootstrap/Table"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useSelector, useDispatch } from 'react-redux';
import { markUserRecovered } from "../redux/user/actions"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

export default function Quarantined() {

    const { employees } = useSelector((state) => state.user);

    const [show, setShow] = useState(false);
    const [currentEmp, setCurrentEmp] = useState({});
    const [input, setInput] = useState("")

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
                        <th>Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Quarantine Days left</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.filter((item) => item.Name.toLowerCase().includes(input)).filter((item) => item.Quarantined === true).map((item => <tr key={item.EmpId}>
                        <td>{item.EmpId}</td>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Designation}</td>
                        <td>{7 - item.quarantineDays}</td>
                        <td><Button onClick={(e) => handleShow(e, item)} variant={"success"}>{"Mark Recover"}</Button></td>
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
                    <Button onClick={(e) => markRecovered(e, currentEmp.EmpId)} variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
