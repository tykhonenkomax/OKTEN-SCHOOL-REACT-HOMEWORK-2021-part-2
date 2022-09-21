import './App.css';
import {CarForm, UserForm, Users} from "./componets";
import {Comments} from "./componets";


function App() {

  return (
      <div>
        <UserForm/>
        <hr/>
        <hr/>
        <CarForm/>
        <br/>
        <Comments/>
      </div>
  );
}

export default App;
