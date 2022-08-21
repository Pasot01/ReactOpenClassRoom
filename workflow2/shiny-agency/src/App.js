import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Survey from './pages/Survey/survey';
import Results from './pages/Results/result';
import Freelances from './pages/Freelances/freelance';
import Header from './components/Header/header';
import Error from './components/Error/error';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}
