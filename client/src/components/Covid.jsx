import React from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useSelector } from 'react-redux';

export default function Covid() {
    const { employees } = useSelector((state) => state.user);
    return (
        <div style={{ margin: "20px 10%" }}>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Emp id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.filter((item) => item.Covid).map((item => <tr key={item["Employee ID"]}>
                        <td>{item["Employee ID"]}</td>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Designation}</td>
                        <td><Button variant={"success"}>{"Mark Recover"}</Button></td>
                    </tr>))}
                </tbody>
            </Table>

        </div>
    )
}
