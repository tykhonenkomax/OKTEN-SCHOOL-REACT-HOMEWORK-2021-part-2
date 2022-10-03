import React from 'react';
import {DEC, INC, RES, SET, useCounter1Reducer} from "../reducer";

const Count1 = () => {

  const [state, dispatch] = useCounter1Reducer()
  return (

      <div>
        <h1>Count1: {state.count1}</h1>
        <button onClick={() => dispatch({type: INC})}>INC</button>
        <button onClick={() => dispatch({type: DEC})}>DEC</button>
        <button onClick={() => dispatch({type: RES})}>RES</button>
        <button onClick={() => dispatch({type: SET})}>SET</button>

      </div>

  );
};


export {Count1};