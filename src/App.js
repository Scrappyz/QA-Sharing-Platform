import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home.js";
import Profile from './pages/Profile/Profile.js';
import CreateAccount from './pages/CreateAccount/CreateAccount.js';
import VerifyCode from './pages/VerifyCode/VerifyCode.js';
import Login from "./pages/Login/Login.js";
import AddQuestion from './pages/AddQuestion/AddQuestion.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>   
    )
}

export default App;
