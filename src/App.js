import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quest from "./pages/Quest.js"
import Paragraph from './components/Paragraph';
import Navbar from './components/NavBar.jsx';
import Main from "./pages/Main.js";
import { UserProvider } from "./context/userContext.js";

import './App.css';

function App() {

    return (

        <div className="App">
            <UserProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route index path="/" element={<Main />} />
                        <Route path="/info" element={<Paragraph />} />
                        <Route path="/cuestionario" element={<Quest />} />

                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>

    );
}
export default App;