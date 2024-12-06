import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VoteSuccess from "./VoteSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<VoteSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
