import React from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useSelector } from 'react-redux';

export default function AllEmployees() {
    const { employees } = useSelector((state) => state.user);
    return (
        <div style={{ margin: "20px 10%" }}>
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
                    {employees.map((item => <tr key={item.EmpId}>
                        <td>{item.EmpId}</td>
                        <td>{item.Covid ? "Covid+ve" : "Healthy"}</td>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Designation}</td>
                        <td><Button variant={item.Covid ? "danger" : "success"}>{item.Covid ? "Mark Recover" : "Mark Covid"}</Button></td>
                    </tr>))}
                </tbody>
            </Table>

        </div>
    )
}
