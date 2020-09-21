import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import CreateStudent from "./components/CreateStudent";
import CreateTeacher from "./components/CreateTeacher";
import CreateAdministrative from "./components/CreateAdministrative";
import CreateCareer from "./components/CreateCareer";
import CreateCourse from "./components/CreateCourse";

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
                    <Route path="/crear_docente">
                        <CreateTeacher />
                    </Route>
                    <Route path="/crear_administrativo">
                        <CreateAdministrative />
                    </Route>
                    <Route path="/crear_carrera">
                        <CreateCareer />
                    </Route>
                    <Route path="/crear_curso">
                        <CreateCourse />
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
