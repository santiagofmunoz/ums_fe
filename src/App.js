import React from 'react';
import Header from "./components/Header";
import CreateStudent from "./components/CreateStudent";

function App(props) {
    return (
        <div className="App">
            <Header />
            <CreateStudent />
        </div>
    );
}

export default App;
