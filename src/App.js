import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./view/pages/Home/Home.js";
import Profile from './view/pages/Profile/Profile.js';
import CreateAccount from './view/pages/CreateAccount/CreateAccount.js';
import VerifyCode from './view/pages/VerifyCode/VerifyCode.js';
import Login from "./view/pages/Login/Login.js";
import AskQuestion from './view/pages/AskQuestion/AskQuestion.js';

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
