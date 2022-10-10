import React from "react";

import './App.css';

import {Header, Posts, Users} from "./components";
import {Comments} from "./components/Comments";


function App() {

  return (
      <div>
        <Header/>
        <hr/>
        <div>
          <Users/>
          <hr/>
          <Posts/>
          <hr/>
          <Comments/>
        </div>
        <hr/>
      </div>
  );
}

export default App;
