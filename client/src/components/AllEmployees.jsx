import React from 'react'
import Table from "react-bootstrap/Table"
import data from "../data/employees"
import Button from "react-bootstrap/Button"

export default function AllEmployees() {
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
                    {data.employees.map((item => <tr key={item["Employee ID"]}>
                        <td>{item["Employee ID"]}</td>
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
