import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/pages/Home/Home.js";
import Profile from "./views/pages/Profile/Profile.js";
import CreatePost from "./views/pages/CreatePost/CreatePost.js";
import Login from "./views/pages/Login/Login.js";
import Register from "./views/pages/Register/Register.js";
import VerifyCode from "./views/pages/VerifyCode/VerifyCode.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/createpost" element={<CreatePost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verifycode" element={<VerifyCode />} />
            </Routes>
        </BrowserRouter>   
    )
}

export default App;
