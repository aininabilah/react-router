import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Media from "./components/Media";
import Dashboard from "./components/Dashboard";
import Help from "./components/Help";

//Buat Component baru, namanya login.jsx
//Jika dia belum login, maka akan dilempar ke halaman login
//Jika Sudah login, maka akan dilempar ke halaman dashboard

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/media" element={<Media />} />
            <Route path="/help" element={<Help />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
