import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
