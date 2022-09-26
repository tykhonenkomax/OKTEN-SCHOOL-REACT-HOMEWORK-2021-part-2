import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Albums, Comments, Posts, Todos} from "./components";


function App() {

  return (
      <div>
        <div className={'menu'}>
          <Link to={'albums'}>Albums</Link>
          <Link to={'todos'}>Todos</Link>
          <Link to={'comments'}>Comments</Link>
        </div>
        <hr/>
        <Routes>
          <Route  path={'albums'} element={<Albums/>}/>
          <Route path={'todos'} element={<Todos/>}/>
          <Route path={'comments'} element={<Comments/>}>
            <Route path={'posts/:id'} element={<Posts/>}></Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
