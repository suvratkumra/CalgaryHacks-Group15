import React from "react"
import Header from './Header';
import MainBody from './MainBody'
import NavButton  from "./NavButton";
import './App.css';

import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <MainBody/>

    </div>
  );
}

export default App;
