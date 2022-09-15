import './App.css';
import {YourHeroes} from "./components";
import Search from "./components/search";
import {useState} from "react";


function App() {

  const [search, setSearch]=useState('')

  const handleNameChange=(search)=>{
    setSearch(search)
  }

  return (
      <>
        <div>
          <Search onChange={handleNameChange}/>
          <div className='generalName'>The Rick and Morty API</div>
          <YourHeroes search={search}/>
        </div>

      </>
  );
}

export default App;
