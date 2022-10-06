import React from "react";

import './App.css';

import {Header, Posts, Users} from "./components";
import {Components} from "./components/Comments";


function App() {

  return (
      <div>
        <Header/>
        <hr/>
        <div>
          <Users/>
          <Posts/>
          <Components/>
        </div>
      </div>
  );
}

export default App;
