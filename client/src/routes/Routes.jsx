import React from 'react'
import Dashboard from '../components/Dashboard'
import Login from "../components/Login"
import { Route, Switch, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export default function Routes() {
    const { authToken } = useSelector((state) => state.auth);
    return (
        <div>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) =>
                        authToken === '' ? (
                            <Redirect to="/login" />

                        ) : (
                                <Dashboard {...props}></Dashboard>
                            )
                    }
                ></Route>
                <Route
                    path="/login"
                    render={(props) =>
                        authToken === '' ? (
                            <Login {...props} />
                        ) : (
                                <Redirect to="/" />
                            )
                    }
                ></Route>
                <Route
                    path="*"
                    render={() => <h1>404 Page Not Found</h1>}
                ></Route>
            </Switch>
        </div>
    )
}
