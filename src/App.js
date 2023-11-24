import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/pages/Home";

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
