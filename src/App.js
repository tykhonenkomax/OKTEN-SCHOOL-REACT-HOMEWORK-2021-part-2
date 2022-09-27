import './App.css';
import {Route, Routes,Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {PostDetails} from "./components";


function App() {


  return (
      <div>
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}>
              <Route path={':id'} element={<PostDetails/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
          </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </div>
  );
}


export default App;
