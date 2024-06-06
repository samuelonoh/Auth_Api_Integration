
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard/home";
import { ToastContainer } from "react-toastify";
import Verification from "./pages/auth/verification";
import Login from "./pages/auth/login";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="flex items-center justify-center w-screen h-screen">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/verify" element={<Verification />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
