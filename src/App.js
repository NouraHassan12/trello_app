import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import LayoutPage from "./Components/Layout/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/:boardID" element={<LayoutPage />} />
      </Routes>
    </>
  );
}

export default App;
