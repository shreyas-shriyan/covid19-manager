import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AllEmployees from './AllEmployees';
import Covid from './Covid';
import Quarantined from './Quarantined';
import Navbar from './Navbar';
import data from "../data/employees"

export default function Dashboard(props) {
    return (
        <div>
            <Navbar></Navbar>
            <h2 style={{ margin: "20px 10%", textAlign: "left" }}>List of Employees</h2>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" style={{ margin: "20px 10%" }}>
                <Tab eventKey="all" title={`All employees(${data.employees.length})`}>
                    <AllEmployees></AllEmployees>
                </Tab>
                <Tab eventKey="covid" title={`Covid(${data.employees.filter((item) => item.Covid).length})`}>
                    <Covid></Covid>
                </Tab>
                <Tab eventKey="quarantined" title="Quarantined">
                    <Quarantined></Quarantined>
                </Tab>
            </Tabs>
        </div>
    )
}
