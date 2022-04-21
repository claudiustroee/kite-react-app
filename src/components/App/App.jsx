import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useToken from './useToken';
import Dashboard from "../Dashboard/Dashboard";
import Login from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';



export default function App() {

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}
