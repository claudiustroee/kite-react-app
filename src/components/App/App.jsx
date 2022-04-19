import React from 'react';
import "../style/App.css";
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from '../Login/Login';
import Preferences from "../Preferences/Preferences";
import useToken from './useToken';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const { token, setToken } = useToken();;

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      {/* <h1>Application</h1> */}
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/preferences' element={<Preferences/>}/>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;