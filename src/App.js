import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage.js";
import HomePage from "./Pages/Homepage.js";
import LoginPage from "./Pages/LoginPage.js";
import Navbar from "./Components/Navbar.js";
import AboutPage from "./Pages/AboutPage.js";
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
