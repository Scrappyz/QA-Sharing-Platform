import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/pages/Home/Home.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>   
    )
}

export default App;
