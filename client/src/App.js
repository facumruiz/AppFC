import React from "react";
import './App.css';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./Components/Navbar/Navbar";
import Edit from "./Components/edit";
import Detail from "./Components/detail";
import AddToSquad from "./Pages/AddToSquad/AddToSquad";
import SquadPlayer from "./Pages/SquadPlayer/SquadPlayer";


const App = () => {

  return (
    <div>
      
      <div className="App" style={{ margin: 0 }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<SquadPlayer />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add-to-squad" element={<AddToSquad />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
  
    </div>
  );
};

export default App;
