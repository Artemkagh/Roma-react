import React from 'react';
import './index.css';
import Header from './Components/Header';
import Home from './pages/Home';
import Success from './pages/Success';
import Blog from './pages/Blog';
import { Route, Routes } from 'react-router-dom';

function App() {
    return(
        <div className='heigher'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historysuccess" element={<Success />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>  
    );
}

export default App;
