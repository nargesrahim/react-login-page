import React from 'react';
import SignUp from './Components/SignUp';
import { Route } from 'react-router-dom';
import Login from "./Components/Login"
import "./app.css"

const App = () => {
    return (
        <div className="element"> 

                <Route path="/login" component={Login} /> 
                <Route exact path="/" component={SignUp} /> 

        </div>
    );
};

export default App;