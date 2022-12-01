import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import Navigation from './components/Navigation';
import CreateChar from "./components/CreateChar";
import CharList from "./components/CharList";

function App() {
  return (
    <Router>
      <Navigation/>
      
      <div className="container-fluid" >
      <Routes> 
      
        <Route path="/createchar" element={<CreateChar/>} />
        <Route path="/editchar/:id" element={<CreateChar/>} />
        <Route path="/" exact element={<CharList/>} />
      
      </Routes>
      </div>
    </Router>
  );
}

export default App;
