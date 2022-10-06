import {Route, Routes} from "react-router";
import {MyLayout} from "./layout";
import {Users, Posts, Comments} from "./components";


function App() {

  return (
      <div>
        <Routes>

        <Route path={'/'} element={<MyLayout/>}>
          <Route path={'users'} element={<Users/>}/>
          <Route path={'posts'} element={<Posts/>}/>
          <Route path={'comments'} element={<Comments/>}/>
        </Route>

        </Routes>

      </div>
  );
}

export default App;
