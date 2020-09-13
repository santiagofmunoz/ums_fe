import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import CreateStudent from "./components/CreateStudent";

function App(props) {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/crear_estudiante">
                        <CreateStudent />
                    </Route>
                    <Route path="/logout">
                        {/*TODO: Not implemented*/}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
