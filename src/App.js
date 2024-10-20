import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage.js";
import HomePage from "./Pages/Homepage.js";
import LoginPage from "./Pages/LoginPage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
