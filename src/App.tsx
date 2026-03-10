import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import MainScreen from "./pages/MainScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
