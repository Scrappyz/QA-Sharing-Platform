import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home.js";
import Profile from './pages/Profile/Profile.js';
import CreateAccount from './pages/CreateAccount/CreateAccount.js';
import VerifyCode from './pages/VerifyCode/VerifyCode.js';
import Login from "./pages/Login/Login.js";
import AskQuestion from './pages/AskQuestion/AskQuestion.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/askquestion" element={<AskQuestion />} />
            </Routes>
        </BrowserRouter>   
    )
}

export default App;
