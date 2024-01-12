import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/features/Home/roots/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
