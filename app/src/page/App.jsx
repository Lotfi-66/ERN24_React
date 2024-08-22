import React from "react";
import {Route, Routes} from "react-router-dom";
import Liste from "../components/Liste.jsx";

const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Liste/>} />
        </Routes>
        </>
    )
}

export default App