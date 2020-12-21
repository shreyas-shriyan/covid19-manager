import React, { useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AllEmployees from './AllEmployees';
import Covid from './Covid';
import Quarantined from './Quarantined';
import Navbar from './Navbar';
import { getUser } from '../redux/user/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Dashboard(props) {
    const { employees } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, [])

    console.log(employees)

    return (
        <div>
            <Navbar></Navbar>
            <h2 style={{ margin: "20px 10%", textAlign: "left" }}>List of Employees</h2>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" style={{ margin: "20px 10%" }}>
                <Tab eventKey="all" title={`All employees(${employees && employees.length})`}>
                    <AllEmployees></AllEmployees>
                </Tab>
                <Tab eventKey="covid" title={`Covid(${employees && employees.filter((item) => item.Covid === true).length})`}>
                    <Covid></Covid>
                </Tab>
                <Tab eventKey="quarantined" title="Quarantined">
                    <Quarantined></Quarantined>
                </Tab>
            </Tabs>
        </div>
    )
}
