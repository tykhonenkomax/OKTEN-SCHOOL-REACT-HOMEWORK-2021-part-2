import React from 'react';

import {Headers} from "../components/headers/Headers";
import {Outlet} from "react-router";

const MyLayout = () => {


  return (

      <div>
        <Headers/>

        <hr/>

        <Outlet/>
      </div>

  );
};


export {MyLayout};