import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/pages/Home/Home.jsx";
import Profile from "./views/pages/Profile/Profile.jsx";
import CreatePost from "./views/pages/CreatePost/CreatePost.jsx";
import Login from "./views/pages/Login/Login.jsx";
import Register from "./views/pages/Register/Register.jsx";
import VerifyCode from "./views/pages/VerifyCode/VerifyCode.jsx";

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
