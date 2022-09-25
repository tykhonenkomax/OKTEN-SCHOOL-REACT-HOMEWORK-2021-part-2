import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Users from "./components/users/users";
import {PostDetails, Posts, UserDetails, UserDetailsTwo} from "./components";


function App() {

  return (
      <div>
        <h2>menu</h2>
        <ul>
          <li><Link to={'/'}>home</Link></li>
          <li><Link to={'/users'}>users</Link></li>
          <li><Link to={'/posts'}>posts</Link></li>
        </ul>

        <div>
          <h2>content</h2>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'users'} element={<Users/>}/>

            <Route path={'posts'} element={<Posts/>}>
              <Route path={'posts/:id'} element={<PostDetails/>}/>
              <Route path={':id'} element={<PostDetails/>}/>
            </Route>

            <Route path={'users/:id'} element={<UserDetails/>}/>
            <Route path={'users/two/:id'} element={<UserDetailsTwo/>}/>
          </Routes>

        </div>
      </div>
  );
}

export default App;
