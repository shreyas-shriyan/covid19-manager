import React, { useEffect, useState } from 'react'
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

    const [tab, setTab] = useState(1)

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const handleSelect = (tab) => {
        setTab(tab)
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 style={{ margin: "20px 10%", textAlign: "left" }}>List of Employees</h2>
            <Tabs activeKey={tab} onSelect={handleSelect} id="controlled-tab-example" style={{ margin: "20px 10%" }}>
                <Tab eventKey={1} title={`All employees(${employees && employees.length})`}>
                    <AllEmployees></AllEmployees>
                </Tab>
                <Tab eventKey={2} title={`Covid(${employees && employees.filter((item) => item.Covid === true).length})`}>
                    <Covid handleSelect={handleSelect}></Covid>
                </Tab>
                <Tab eventKey={3} title={`Quarantined(${employees && employees.filter((item) => item.Quarantined === true).length})`}>
                    <Quarantined></Quarantined>
                </Tab>
            </Tabs>
        </div>
    )
}
