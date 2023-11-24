import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/pages/Home/Home.js";
import Profile from "./views/pages/Profile/Profile.js";
import AskQuestion from "./views/pages/AskQuestion/AskQuestion.js";

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
