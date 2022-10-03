import './App.css';
import {useReducer} from "react";


function App() {


  function init(initialValue) {
    return {counter1: initialValue, counter2: initialValue}
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'INC':
        return {...state, counter1: state.counter1 + 1}
      case 'DEC':
        return {...state, counter1: state.counter1-1}
      case 'RES':
        return {...state, counter1: state.counter1 = 0}
      case "SET1":
        return {...state, counter1:action.payload}
    }
    return {...state}
  }

  const [state, dispuch] = useReducer(reducer, 0, init)


  return (
      <div>
        <h1>counter1: {state.counter1}</h1>
        <h1>counter2: {state.counter2}</h1>
        <button onClick={() => dispuch({type: 'INC'})}>incr</button>
        <button onClick={() => dispuch({type: 'DEC'})}>decr</button>
        <button onClick={()=> dispuch({type: 'RES'})}>reset</button>
        <button onClick={()=> dispuch({type: 'SET1', payload: 10})}>set</button>

      </div>
  );
}

export default App;
